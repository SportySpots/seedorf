from allauth.account import app_settings as allauth_settings
from allauth.account.adapter import get_adapter
from django.contrib.auth.models import Group
from django.core.validators import EmailValidator
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_nested.serializers import NestedHyperlinkedModelSerializer
from allauth.utils import email_address_exists
from allauth.account.utils import setup_user_email

from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('uuid', 'first_name', 'last_name', 'email', 'is_staff', 'is_active', 'date_joined',
                  'created_at', 'modified_at', 'groups',)
        read_only_fields = ('uuid', 'is_staff', 'is_active', 'date_joined', 'created_at', 'modified_at', 'groups')


class UserNestedSerializer(NestedHyperlinkedModelSerializer):

    class Meta:
        model = User
        fields = ('uuid', 'first_name', 'last_name', 'username', 'email', 'is_staff', 'is_active', 'date_joined',
                  'created_at', 'modified_at', 'groups',)
        read_only_fields = ('uuid', 'created_at', 'modified_at',)


class UserDetailsSerializer(serializers.ModelSerializer):
    """
    This serializer is used to return the authenticated user in the JWT (JSON Web Token)
    """
    class Meta:
        model = User
        fields = ('uuid', 'first_name', 'last_name', 'username', 'email', 'is_staff', 'is_active', 'date_joined',
                  'created_at', 'modified_at',)
        read_only_fields = ('uuid', 'created_at', 'modified_at',)


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('name',)


class RegisterSerializer(serializers.Serializer):
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    email = serializers.EmailField(required=True, validators=[EmailValidator(),
                                                              UniqueValidator(queryset=User.objects.all())])
    password1 = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    def validate_email(self, email):
        email = get_adapter().clean_email(email)
        if allauth_settings.UNIQUE_EMAIL:
            if email and email_address_exists(email):
                raise serializers.ValidationError(
                    _("A user is already registered with this e-mail address."))
        return email

    def validate_password1(self, password):
        return get_adapter().clean_password(password)

    def validate(self, data):
        if data['password1'] != data['password2']:
            raise serializers.ValidationError(_("The two password fields didn't match."))
        return data

    def custom_signup(self, request, user):
        pass

    def get_cleaned_data(self):
        return {
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'email': self.validated_data.get('email', '')
        }

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        adapter.save_user(request, user, self)
        self.custom_signup(request, user)
        setup_user_email(request, user, [])
        return user

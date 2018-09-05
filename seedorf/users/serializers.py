import pytz
import six
from allauth.account import app_settings as allauth_settings
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from allauth.utils import email_address_exists
from django.contrib.auth.models import Group
from django.core.validators import EmailValidator
from django.utils.translation import ugettext_lazy as _
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django_countries.serializers import CountryFieldMixin

from seedorf.sports.models import Sport
from seedorf.sports.serializers import SportSerializer
from seedorf.spots.serializers import SpotSerializer
from .models import User, UserProfile


class TimezoneField(serializers.Field):
    def to_representation(self, obj):
        return six.text_type(obj)

    def to_internal_value(self, data):
        try:
            return pytz.timezone(str(data))
        except pytz.exceptions.UnknownTimeZoneError:
            raise serializers.ValidationError(_("Unknown timezone"))


class UserSportNestedSerializer(serializers.ModelSerializer):
    uuid = serializers.UUIDField(required=True)

    class Meta:
        model = Sport
        fields = ("uuid", "category", "name", "description", "created_at", "modified_at")
        read_only_fields = ("uuid", "category", "name", "description", "created_at", "modified_at")

    def create(self, validated_data):
        if self.context["view"].basename == "user-sport":
            user_uuid = self.context["view"].kwargs["user_uuid"]
            user = User.objects.get(uuid=user_uuid)

            sport_uuid = validated_data["uuid"]
            try:
                sport = Sport.objects.get(uuid=str(sport_uuid))
            except Sport.DoesNotExist:
                raise serializers.ValidationError(_("Sport not found"))

            user.sports.add(sport)
            user.save()

            return sport

        return {}


class UserProfileSerializer(CountryFieldMixin, serializers.ModelSerializer):

    sports = SportSerializer(many=True, required=False)
    spots = SpotSerializer(many=True, required=False)
    timezone = TimezoneField(required=False)

    # spots = serializers.SerializerMethodField()
    # sports = serializers.SerializerMethodField()

    class Meta:
        model = UserProfile
        fields = (
            "uuid",
            "sports",
            "spots",
            "gender",
            "year_of_birth",
            "avatar",
            "language",
            "timezone",
            "country",
            "bio",
        )
        read_only_fields = ("uuid", "sports", "spots", "created_at", "modified_at")

    def create(self, validated_data):
        # NOTE: We disallow nested object creation, hence pop out (ignore) related objects
        validated_data.pop('spots')
        validated_data.pop('sports')

        # NOTE: Only the user himself can update his profile
        user = self.context["request"].user
        validated_data['user'] = user

        profile = UserProfile.objects.create(**validated_data)

        profile.save()
        return profile

    def update(self, instance, validated_data):
        # NOTE: We disallow nested object creation, hence pop out (ignore) related objects
        validated_data.pop('spots')
        validated_data.pop('sports')

        for k, v in validated_data.items():
            setattr(instance, k, v)
        instance.save()
        return instance

    # def get_spots(self, obj):
    #     spots = obj.spots.all()
    #     self.context["user_uuid"] = obj.uuid
    #     return UserProfileSpotNestedSerializer(spots, many=True, read_only=True, context=self.context).data
    #
    # def get_sports(self, obj):
    #     sports = obj.sports.all()
    #     self.context["user_uuid"] = obj.uuid
    #     return UserProfileSportNestedSerializer(sports, many=True, read_only=True, context=self.context).data

# class UserProfileSportNestedSerializer(NestedHyperlinkedModelSerializer):
#     uuid = serializers.UUIDField(required=True)
#
#     class Meta:
#         model = Sport
#         fields = ('uuid', 'category', 'name', 'description', 'created_at', 'modified_at')
#         read_only_fields = ('category', 'name', 'description', 'created_at', 'modified_at',)
#
#     def create(self, validated_data):
#         user_uuid = self.context['view'].kwargs['user_uuid']
#         user = User.objects.get(uuid=user_uuid)
#
#         sport_uuid = validated_data['uuid']
#         try:
#             sport = Sport.objects.get(uuid=str(sport_uuid))
#         except Sport.DoesNotExist:
#             raise serializers.ValidationError(_('Sport not found'))
#
#         # if the game already has a spot assigned, then check if the sport being assinged belongs to the spot
#         if game.spot:
#             spot = Spot.objects.filter(sports__uuid=sport_uuid).first()
#             if not spot or game.spot.uuid != spot.uuid:
#                 raise serializers.ValidationError(_('Invalid Sport. Sport being assigned is not associated with the'
#                                                     ' game spot'))
#
#         game.sport = sport
#         game.save()
#
#         return sport


class UserSerializer(serializers.ModelSerializer):

    profile = UserProfileSerializer(many=False, required=False)

    class Meta:
        model = User
        fields = (
            "uuid",
            "first_name",
            "last_name",
            "email",
            "is_staff",
            "is_active",
            "date_joined",
            "profile",
            "created_at",
            "modified_at",
            "groups",
        )
        read_only_fields = ("uuid", "is_staff", "is_active", "date_joined", "created_at", "modified_at", "groups")


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ("name",)


class RegisterSerializer(serializers.Serializer):
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    email = serializers.EmailField(
        required=True, validators=[EmailValidator(), UniqueValidator(queryset=User.objects.all())]
    )
    password1 = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    @staticmethod
    def validate_email(email):
        email = get_adapter().clean_email(email)
        if allauth_settings.UNIQUE_EMAIL:
            if email and email_address_exists(email):
                raise serializers.ValidationError(_("A user is already registered with this e-mail address."))
        return email

    @staticmethod
    def validate_password1(password):
        return get_adapter().clean_password(password)

    def validate(self, data):
        if data["password1"] != data["password2"]:
            raise serializers.ValidationError(_("The two password fields didn't match."))
        return data

    def custom_signup(self, request, user):
        pass

    def get_cleaned_data(self):
        return {
            "first_name": self.validated_data.get("first_name", ""),
            "last_name": self.validated_data.get("last_name", ""),
            "username": self.validated_data.get("username", ""),
            "password1": self.validated_data.get("password1", ""),
            "email": self.validated_data.get("email", ""),
        }

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        adapter.save_user(request, user, self)
        self.custom_signup(request, user)
        setup_user_email(request, user, [])
        return user

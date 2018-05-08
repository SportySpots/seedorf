from django.contrib.auth.models import Group
from rest_framework import serializers
from rest_framework_nested.serializers import NestedHyperlinkedModelSerializer

from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('uuid', 'first_name', 'last_name', 'username', 'email', 'is_staff', 'is_active', 'date_joined',
                  'created_at', 'modified_at', 'groups',)
        read_only_fields = ('uuid', 'created_at', 'modified_at',)


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

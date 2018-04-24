from django.contrib.auth.models import Group
from rest_framework import serializers

from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('uuid', 'name', 'username', 'email', 'url', 'is_staff', 'is_active', 'date_joined',
                  'created_at', 'modified_at', 'groups',)
        extra_kwargs = {
            'url': {'lookup_field': 'uuid'}
        }


class UserDetailsSerializer(serializers.ModelSerializer):
    """
    This serializer is used to return the authenticated user in the JWT (JSON Web Token)
    """
    class Meta:
        model = User
        fields = ('uuid', 'name', 'username', 'email', 'is_staff', 'is_active', 'date_joined',
                  'created_at', 'modified_at',)


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('name', 'url', )

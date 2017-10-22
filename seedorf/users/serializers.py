from django.contrib.auth.models import Group
from rest_framework import serializers

from .models import User


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('uuid', 'username', 'email', 'url', 'groups')
        extra_kwargs = {
            'url': {'lookup_field': 'uuid'}
        }


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('name', 'url', )

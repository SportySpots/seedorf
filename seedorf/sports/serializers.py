from rest_framework import serializers
from rest_framework_nested.serializers import NestedHyperlinkedModelSerializer

from .models import Sport


class SportSerializer(serializers.ModelSerializer):

    class Meta:
        model = Sport
        fields = ('uuid', 'category', 'name', 'description', 'created_at', 'modified_at')
        read_only_fields = ('uuid', 'category', 'created_at', 'modified_at')


class SportNestedSerializer(NestedHyperlinkedModelSerializer):

    class Meta:
        model = Sport
        fields = ('uuid', 'category', 'name', 'description', 'created_at', 'modified_at')
        read_only_fields = ('uuid', 'category', 'name', 'description', 'created_at', 'modified_at',)

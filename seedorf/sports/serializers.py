from rest_framework import serializers

from .models import Sport


class SportSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Sport
        fields = ('uuid', 'created_at', 'modified_at', 'deleted_at')
        extra_kwargs = {
            'url': {'lookup_field': 'uuid'}
        }

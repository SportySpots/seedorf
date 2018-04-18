from rest_framework import serializers

from .models import Sport


class SportSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='sport-detail',
        lookup_field='uuid'
    )

    class Meta:
        model = Sport
        fields = ('url', 'uuid', 'category', 'name', 'description', 'created_at', 'modified_at')

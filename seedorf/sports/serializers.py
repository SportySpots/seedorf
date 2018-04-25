from rest_framework import serializers
from rest_framework_nested.serializers import NestedHyperlinkedModelSerializer
from rest_framework_nested.relations import NestedHyperlinkedIdentityField

from .models import Sport


class SportSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='sport-detail',
        lookup_field='uuid'
    )

    class Meta:
        model = Sport
        fields = ('url', 'uuid', 'category', 'name', 'description', 'created_at', 'modified_at')
        read_only_fields = ('uuid', 'category',)


class GameSportSerializer(NestedHyperlinkedModelSerializer):
    parent_lookup_kwargs = {
        'game_uuid': 'game__uuid',
    }
    url = NestedHyperlinkedIdentityField(
        many=False,
        read_only=True,
        view_name='game-sport-detail',
        lookup_field='uuid',
        parent_lookup_kwargs={
            'spot_uuid': 'spot__uuid'
        }
    )

    class Meta:
        model = Sport
        fields = ('url', 'uuid', 'category', 'name', 'description', 'created_at', 'modified_at')
        read_only_fields = ('uuid', 'category',)


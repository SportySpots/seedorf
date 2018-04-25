from rest_framework import serializers

from .models import Game, RSVPStatus
from seedorf.users.serializers import UserSerializer
from seedorf.sports.serializers import SportSerializer
from seedorf.spots.serializers import SpotSerializer, GameSpotNestedSerializer
from rest_framework_nested.serializers import NestedHyperlinkedModelSerializer
from rest_framework_nested.relations import NestedHyperlinkedIdentityField
from rest_framework_nested.relations import NestedHyperlinkedRelatedField


class RSVPStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = RSVPStatus
        fields = ('uuid', 'status', 'created_at', 'modified_at', 'user', 'game',)
        extra_kwargs = {
            'url': {'lookup_field': 'uuid'}
        }
        read_only_fields = ('uuid',)


class GameSerializer(serializers.HyperlinkedModelSerializer):

    url = serializers.HyperlinkedIdentityField(
        view_name='game-detail',
        lookup_field='uuid'
    )

    organizer = UserSerializer(read_only=False, many=False)
    sport = SportSerializer(read_only=False, many=False)
    spot = SpotSerializer(read_only=False, many=False)
    # rsvps = RSVPStatusSerializer(read_only=False, many=True)

    class Meta:
        model = Game
        fields = ('url', 'uuid', 'name', 'start_time', 'start_timezone', 'end_time', 'end_timezone', 'rsvp_open_time',
                  'rsvp_close_time', 'rsvp_closed', 'invite_mode', 'status', 'capacity', 'show_remaining', 'is_listed',
                  'is_shareable', 'is_featured', 'created_at', 'modified_at',
                  'organizer',
                  'sport',
                  'spot',
                  # 'rsvps',
                  )
        extra_kwargs = {
            'url': {'lookup_field': 'uuid'}
        }
        read_only_fields = ('uuid',)

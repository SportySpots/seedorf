from rest_framework import serializers

from .models import Game, RSVPStatus
from seedorf.users.serializers import UserSerializer
from seedorf.sports.serializers import SportSerializer
from seedorf.spots.serializers import SpotSerializer


class RSVPStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = RSVPStatus
        fields = ('uuid', 'status', 'created_at', 'modified_at', 'user', 'game',)
        extra_kwargs = {
            'url': {'lookup_field': 'uuid'}
        }
        read_only_fields = ('uuid', 'created_at', 'modified_at',)


class GameSerializer(serializers.ModelSerializer):
    organizer = UserSerializer(read_only=False, many=False)
    sport = SportSerializer(read_only=False, many=False)
    spot = SpotSerializer(read_only=False, many=False)
    rsvps = RSVPStatusSerializer(read_only=False, many=True)

    class Meta:
        model = Game
        fields = ('uuid', 'name', 'start_time', 'start_timezone', 'end_time', 'end_timezone', 'rsvp_open_time',
                  'rsvp_close_time', 'rsvp_closed', 'invite_mode', 'status', 'capacity', 'show_remaining', 'is_listed',
                  'is_shareable', 'is_featured', 'created_at', 'modified_at',
                  'organizer',
                  'sport',
                  'spot',
                  'rsvps',
                  )
        extra_kwargs = {
            'url': {'lookup_field': 'uuid'}
        }
        read_only_fields = ('uuid', 'created_at', 'modified_at',)

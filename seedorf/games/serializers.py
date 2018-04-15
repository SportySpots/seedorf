from rest_framework import serializers

from .models import Game, RSVPStatus
from seedorf.users.serializers import UserSerializer
from seedorf.sports.serializers import SportSerializer


class GameSerializer(serializers.ModelSerializer):
    organizer = UserSerializer()
    sport = SportSerializer()

    class Meta:
        model = Game
        fields = ('uuid', 'organizer', 'sport', 'spot', 'name', 'start_time', 'start_timezone', 'end_time',
                  'end_timezone', 'rsvp_open_time', 'rsvp_close_time', 'rsvp_closed', 'invite_mode', 'status',
                  'capacity', 'show_remaining', 'is_listed', 'is_shareable', 'is_featured', 'created_at', 'modified_at')
        extra_kwargs = {
            'url': {'lookup_field': 'uuid'}
        }


class RSVPStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = RSVPStatus
        fields = ('uuid', 'user', 'game', 'status', 'created_at', 'modified_at',)
        extra_kwargs = {
            'url': {'lookup_field': 'uuid'}
        }

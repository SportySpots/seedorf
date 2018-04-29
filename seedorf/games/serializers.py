from rest_framework import serializers
from rest_framework_nested.serializers import NestedHyperlinkedModelSerializer

from seedorf.sports.serializers import SportNestedSerializer
from seedorf.spots.serializers import SpotNestedSerializer
from seedorf.users.serializers import UserNestedSerializer, UserSerializer
from .models import Game, RsvpStatus


class RsvpStatusSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True, many=False)

    class Meta:
        model = RsvpStatus
        fields = ('uuid', 'status', 'created_at', 'modified_at', 'user',)
        read_only_fields = ('uuid', 'created_at', 'modified_at',)


class RsvpStatusNestedSerializer(NestedHyperlinkedModelSerializer):
    user = UserSerializer(read_only=True, many=False)

    class Meta:
        model = RsvpStatus
        fields = ('uuid', 'status', 'created_at', 'modified_at', 'user',)
        read_only_fields = ('uuid', 'created_at', 'modified_at',)


class GameSerializer(serializers.ModelSerializer):
    organizer = UserNestedSerializer(read_only=True, many=False)
    sport = SportNestedSerializer(read_only=True, many=False)
    spot = SpotNestedSerializer(read_only=True, many=False)
    rsvps = RsvpStatusNestedSerializer(read_only=True, many=True)

    class Meta:
        model = Game
        fields = ('uuid', 'name', 'start_time', 'start_timezone', 'end_time', 'end_timezone', 'rsvp_open_time',
                  'rsvp_close_time', 'rsvp_closed', 'invite_mode', 'status', 'capacity', 'show_remaining', 'is_listed',
                  'is_shareable', 'is_featured', 'created_at', 'modified_at', 'organizer', 'sport', 'spot', 'rsvps',)
        read_only_fields = ('uuid', 'created_at', 'modified_at',)

    def create(self, validated_data):
        user = self.context['request'].user
        game = Game.objects.create(organizer=user, **validated_data)
        return game

    def update(self, instance, validated_data):
        for k, v in validated_data.items():
            setattr(instance, k, v)
        instance.save()

        return instance

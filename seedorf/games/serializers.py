from django.utils.translation import ugettext_lazy as _
from rest_framework import serializers
from rest_framework_nested.serializers import NestedHyperlinkedModelSerializer

from seedorf.sports.serializers import SportNestedSerializer
from seedorf.spots.serializers import SpotNestedSerializer
from seedorf.users.serializers import UserNestedSerializer, UserSerializer
from .models import Game, RsvpStatus


class RsvpStatusSerializer(serializers.ModelSerializer):

    class Meta:
        model = RsvpStatus
        fields = ('uuid', 'status', 'user', 'created_at', 'modified_at',)
        read_only_fields = ('uuid', 'created_at', 'modified_at',)


class RsvpStatusNestedSerializer(NestedHyperlinkedModelSerializer):
    # NOTE: User is readonly as it is get/set direct from the request
    # TODO: Only the logged in user can create an rsvp for himself/ herself
    # TODO: Check if the game is invite only and see if the user was invited
    # TODO: Check if the game max users count has been reached.
    user = UserSerializer(many=False, required=False)

    class Meta:
        model = RsvpStatus
        fields = ('uuid', 'status', 'user', 'created_at', 'modified_at', )
        read_only_fields = ('uuid', 'user', 'created_at', 'modified_at', )

    def create(self, validated_data):
        if self.context['view'].basename == 'game-rsvps':
            game_uuid = self.context['view'].kwargs['game_uuid']
            game = Game.objects.get(uuid=game_uuid)
            user = self.context['request'].user
            status = validated_data['status']

            rsvp = RsvpStatus.objects.create(game=game, user=user, status=status)
            return rsvp

        return {}

    def update(self, instance, validated_data):
        if self.context['view'].basename == 'game-rsvps':
            game_uuid = self.context['view'].kwargs['game_uuid']
            user = self.context['request'].user
            status = validated_data['status']

            try:
                rsvp = RsvpStatus.objects.get(game__uuid=game_uuid)
            except RsvpStatus.DoesNotExist:
                raise serializers.ValidationError(_('Invalid game.'))

            if rsvp.user.uuid != user.uuid:
                raise serializers.ValidationError(_('Invalid user.'))

            rsvp.status = status
            rsvp.save()

            return rsvp


class GameSerializer(serializers.ModelSerializer):
    organizer = UserNestedSerializer(read_only=True, many=False)
    sport = SportNestedSerializer(read_only=True, many=False)
    spot = SpotNestedSerializer(read_only=True, many=False)
    rsvps = RsvpStatusNestedSerializer(source='attendees', read_only=True, many=True)

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

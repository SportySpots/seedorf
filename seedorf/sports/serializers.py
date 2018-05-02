from rest_framework import serializers
from rest_framework_nested.serializers import NestedHyperlinkedModelSerializer
from django.utils.translation import ugettext_lazy as _

from seedorf.games.models import Game
from seedorf.spots.models import Spot
from .models import Sport


class SportSerializer(serializers.ModelSerializer):

    class Meta:
        model = Sport
        fields = ('uuid', 'category', 'name', 'description', 'created_at', 'modified_at')
        read_only_fields = ('uuid', 'category', 'created_at', 'modified_at')


class SportNestedSerializer(NestedHyperlinkedModelSerializer):
    uuid = serializers.UUIDField(required=True)

    class Meta:
        model = Sport
        fields = ('uuid', 'category', 'name', 'description', 'created_at', 'modified_at')
        read_only_fields = ('category', 'name', 'description', 'created_at', 'modified_at',)

    def create(self, validated_data):
        if self.context['view'].basename == 'game-sport':
            game_uuid = self.context['view'].kwargs['game_uuid']
            game = Game.objects.get(uuid=game_uuid)

            sport_uuid = validated_data['uuid']
            try:
                sport = Sport.objects.get(uuid=str(sport_uuid))
            except Sport.DoesNotExist:
                raise serializers.ValidationError(_('Sport not found'))

            # if the game already has a spot assigned, then check if the sport being assinged belongs to the spot
            if game.spot:
                spot = Spot.objects.filter(sports__uuid=sport_uuid).first()
                if not spot or game.spot.uuid != spot.uuid:
                    raise serializers.ValidationError(_('Invalid Sport. Sport being assigned is not associated with the'
                                                        ' game spot'))

            game.sport = sport
            game.save()

            return sport

        elif self.context['view'].basename == 'spot-sports':
            spot_uuid = self.context['view'].kwargs['spot_uuid']
            spot = Spot.objects.get(uuid=spot_uuid)

            sport_uuid = validated_data['uuid']
            try:
                sport = Sport.objects.get(uuid=sport_uuid)
            except Sport.DoesNotExist:
                raise serializers.ValidationError(_('Sport not found'))

            spot.sports.clear()
            spot.sports.add(sport)
            return sport

        return {}


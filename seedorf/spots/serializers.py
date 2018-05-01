from django.utils.translation import ugettext_lazy as _
from rest_framework import serializers
from rest_framework_nested.serializers import NestedHyperlinkedModelSerializer

from seedorf.games.models import Game
from seedorf.locations.serializers import AddressNestedSerializer
from seedorf.sports.models import Sport
from seedorf.sports.serializers import SportNestedSerializer
from seedorf.sports.serializers import SportSerializer
from .models import Spot, SpotAmenity, SpotImage, SpotOpeningTime


class SpotAmenitySerializer(serializers.ModelSerializer):
    sport = SportSerializer(read_only=True, many=False)

    class Meta:
        model = SpotAmenity
        fields = ('uuid', 'data', 'created_at', 'modified_at', 'sport',)
        read_only_fields = ('uuid', 'created_at', 'modified_at',)


class SpotAmenityNestedSerializer(NestedHyperlinkedModelSerializer):
    sport = SportSerializer(read_only=True, many=False)

    class Meta:
        model = SpotAmenity
        fields = ('uuid', 'data', 'created_at', 'modified_at', 'sport',)
        read_only_fields = ('uuid', 'created_at', 'modified_at',)


class SpotOpeningTimeSerializer(serializers.ModelSerializer):
    sport = SportSerializer(read_only=True, many=False)

    class Meta:
        model = SpotOpeningTime
        fields = ('uuid', 'day', 'start_time', 'end_time', 'is_closed', 'created_at', 'modified_at', 'sport',)
        read_only_fields = ('uuid', 'created_at', 'modified_at',)


class SpotOpeningTimeNestedSerializer(NestedHyperlinkedModelSerializer):
    sport = SportSerializer(read_only=True, many=False)

    class Meta:
        model = SpotOpeningTime
        fields = ('uuid', 'day', 'start_time', 'end_time', 'is_closed', 'created_at', 'modified_at', 'sport',)
        read_only_fields = ('uuid', 'created_at', 'modified_at',)


class SpotImageSerializer(serializers.ModelSerializer):
    sport = SportSerializer(read_only=True, many=False)

    class Meta:
        model = SpotImage
        fields = ('uuid', 'image', 'is_flagged', 'is_user_submitted', 'created_at', 'modified_at', 'sport',)
        read_only_fields = ('uuid', 'created_at', 'modified_at',)


class SpotImageNestedSerializer(NestedHyperlinkedModelSerializer):
    sport = SportSerializer(read_only=True, many=False)

    class Meta:
        model = SpotImage
        fields = ('uuid', 'image', 'is_flagged', 'is_user_submitted', 'created_at', 'modified_at', 'sport',)
        read_only_fields = ('uuid', 'created_at', 'modified_at',)


class SpotSerializer(serializers.ModelSerializer):

    # TODO: is_verified can only be set by staff, currently its is covered by IsAdminOrReadOnly permission
    # TODO: is_permanently_closed can only be set by staff, currently is covered by IsAdminOrReadOnly permission
    address = AddressNestedSerializer(read_only=True, many=False)
    sports = SportNestedSerializer(read_only=True, many=True)
    images = SpotImageNestedSerializer(read_only=True, many=True)
    amenities = SpotAmenityNestedSerializer(read_only=True, many=True)
    opening_times = SpotOpeningTimeNestedSerializer(read_only=True, many=True)

    class Meta:
        model = Spot
        exclude = ('id',)
        read_only_fields = ('uuid', 'created_at', 'modified_at',)

    def create(self, validated_data):
        spot = Spot.objects.create(**validated_data)
        return spot

    def update(self, instance, validated_data):
        for k, v in validated_data.items():
            setattr(instance, k, v)
        instance.save()
        return instance


class SpotNestedSerializer(NestedHyperlinkedModelSerializer):
    uuid = serializers.UUIDField(required=True)

    class Meta:
        model = Spot
        fields = ('uuid', 'created_at', 'modified_at')
        read_only_fields = ('created_at', 'modified_at',)

    def create(self, validated_data):
        if self.context['view'].basename == 'game-spot':
            game_uuid = self.context['view'].kwargs['game_uuid']
            game = Game.objects.get(uuid=game_uuid)

            spot_uuid = validated_data['uuid']
            try:
                spot = Spot.objects.get(uuid=str(spot_uuid))
            except Spot.DoesNotExist:
                raise serializers.ValidationError(_('Spot not found'))

            # if the game already has a spot assigned, then check if the sport being assinged belongs to the spot
            if game.sport:
                sport = Sport.objects.filter(spots__uuid=spot_uuid).first()
                if not sport or game.sport.uuid != sport.uuid:
                    raise serializers.ValidationError(_('Invalid Spot. Spot being assigned doesnt have the already '
                                                        'associated sport'))

            game.spot = spot
            game.save()

            return spot

        return {}

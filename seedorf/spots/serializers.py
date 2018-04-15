from rest_framework import serializers

from .models import Spot, SpotAmenity, SpotImage, SpotOpeningTime
from seedorf.locations.serializers import AddressSerializer
from seedorf.sports.serializers import SportSerializer
from seedorf.locations.models import Address
from seedorf.sports.models import Sport


class SpotAmenitySerializer(serializers.ModelSerializer):
    class Meta:
        model = SpotAmenity,
        fields = ('uuid', 'spot', 'sport', 'data', 'created_at', 'modified_at',)
        extra_kwargs = {
            'url': {'lookup_field': 'uuid'}
        }


class SpotImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpotImage
        fields = ('uuid', 'image', 'is_flagged', 'is_user_submitted', 'created_at', 'modified_at',)
        extra_kwargs = {
            'url': {'lookup_field': 'uuid'}
        }


class SpotOpeningTimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpotOpeningTime
        fields = ('uuid', 'spot', 'day', 'start_time', 'end_time', 'is_closed', 'created_at', 'modified_at',)
        extra_kwargs = {
            'url': {'lookup_field': 'uuid'}
        }


class SpotSerializer(serializers.ModelSerializer):
    address = AddressSerializer()
    sports = serializers.SlugRelatedField(many=True,
                                          queryset=Sport.objects.all(),
                                          slug_field='uuid')
    # sports = SportSerializer(read_only=True, many=True)
    # images = SpotImageSerializer(read_only=True, many=True)
    # amenities = SpotAmenitySerializer(read_only=True, many=True)
    # opening_times = SpotOpeningTimeSerializer(read_only=True, many=True)

    class Meta:
        model = Spot
        fields = ('uuid', 'name', 'slug', 'owner', 'description', 'logo', 'homepage_url',
                  'is_verified', 'is_permanently_closed', 'is_public', 'is_temporary', 'establishment_date',
                  'closure_date', 'created_at', 'modified_at', 'sports', 'address', 'images', 'amenities',
                  'opening_times',)
        extra_kwargs = {
            'url': {'lookup_field': 'uuid'},
        }

    def create(self, validated_data):
        address_data = validated_data.pop('address')
        sports_data = validated_data.pop('sports')

        address = Address.objects.create(**address_data)
        spot = Spot.objects.create(address=address, **validated_data)
        spot.sports.add(*sports_data)
        return spot

    def update(self, instance, validated_data):
        address_data = validated_data.pop('address')
        sports_data = validated_data.pop('sports')

        for k, v in validated_data.items():
            setattr(instance, k, v)

        instance.save()
        instance.sports.clear()
        instance.sports.add(*sports_data)

        Address.objects.update(**address_data)
        return instance




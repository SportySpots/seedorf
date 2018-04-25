from rest_framework import serializers
from rest_framework_nested.relations import NestedHyperlinkedIdentityField
from rest_framework_nested.serializers import NestedHyperlinkedModelSerializer

from seedorf.locations.models import Address
from seedorf.locations.serializers import AddressSerializer
from seedorf.sports.serializers import SportSerializer
from .models import Spot, SpotAmenity, SpotImage, SpotOpeningTime


class SpotAmenitySerializer(serializers.ModelSerializer):
    sport = SportSerializer(read_only=True, many=False)

    class Meta:
        model = SpotAmenity
        fields = ('uuid', 'data', 'created_at', 'modified_at', 'sport',)
        extra_kwargs = {
            'url': {'lookup_field': 'uuid'}
        }
        read_only_fields = ('uuid',)


class SpotAmenityNestedSerializer(NestedHyperlinkedModelSerializer):
    parent_lookup_kwargs = {
        'spot_uud': 'spot__uuid',
    }
    url = NestedHyperlinkedIdentityField(
        many=False,
        read_only=True,
        view_name='spot-amenities-detail',
        lookup_field='uuid',
        parent_lookup_kwargs={
            'spot_uuid': 'spot__uuid'
        }
    )
    sport = SportSerializer(read_only=True, many=False)

    class Meta:
        model = SpotAmenity
        fields = ('url', 'uuid', 'data', 'created_at', 'modified_at', 'sport',)
        read_only_fields = ('uuid',)


class SpotOpeningTimeSerializer(serializers.ModelSerializer):
    sport = SportSerializer(read_only=True, many=False)

    class Meta:
        model = SpotOpeningTime
        fields = ('uuid', 'day', 'start_time', 'end_time', 'is_closed', 'created_at', 'modified_at', 'sport',)
        extra_kwargs = {
            'url': {'lookup_field': 'uuid'}
        }
        read_only_fields = ('uuid',)


class SpotOpeningTimeNestedSerializer(NestedHyperlinkedModelSerializer):
    parent_lookup_kwargs = {
        'spot_uud': 'spot__uuid',
    }
    url = NestedHyperlinkedIdentityField(
        many=False,
        read_only=True,
        view_name='spot-opening-times-detail',
        lookup_field='uuid',
        parent_lookup_kwargs={
            'spot_uuid': 'spot__uuid'
        }
    )
    sport = SportSerializer(read_only=True, many=False)

    class Meta:
        model = SpotOpeningTime
        fields = ('url', 'uuid', 'day', 'start_time', 'end_time', 'is_closed', 'created_at', 'modified_at', 'sport',)
        read_only_fields = ('uuid',)


class SpotImageSerializer(serializers.HyperlinkedModelSerializer):
    # TODO: Allow to set is_flagged only if user belongs to staff
    # TODO: Allow to edit is_user_submitted only if user belongs to staff
    sport = SportSerializer(read_only=True, many=False)

    class Meta:
        model = SpotImage
        fields = ('uuid', 'image', 'is_flagged', 'is_user_submitted', 'created_at', 'modified_at', 'sport',)
        extra_kwargs = {
            'url': {'lookup_field': 'uuid'}
        }
        read_only_fields = ('uuid',)


class SpotImageNestedSerializer(NestedHyperlinkedModelSerializer):
    parent_lookup_kwargs = {
        'spot_uud': 'spot__uuid',
    }
    url = NestedHyperlinkedIdentityField(
        many=False,
        read_only=True,
        view_name='spot-images-detail',
        lookup_field='uuid',
        parent_lookup_kwargs={
            'spot_uuid': 'spot__uuid'
        }
    )
    sport = SportSerializer(read_only=True, many=False)

    class Meta:
        model = SpotImage
        fields = ('url', 'uuid', 'image', 'is_flagged', 'is_user_submitted', 'created_at', 'modified_at', 'sport',)
        read_only_fields = ('uuid',)


class SpotSerializer(serializers.HyperlinkedModelSerializer):

    # TODO: is_verified can only be set by staff, currently its is covered by IsAdminOrReadOnly permission
    # TODO: is_permanently_closed can only be set by staff, currently is covered by IsAdminOrReadOnly permission

    url = serializers.HyperlinkedIdentityField(
        view_name='spot-detail',
        lookup_field='uuid'
    )
    address = AddressSerializer(read_only=False)
    sports = SportSerializer(read_only=False, many=True)
    images = SpotImageNestedSerializer(read_only=False, many=True)
    amenities = SpotAmenityNestedSerializer(read_only=False, many=True)
    opening_times = SpotOpeningTimeNestedSerializer(read_only=False, many=True)

    class Meta:
        model = Spot
        fields = ('url', 'uuid', 'name', 'slug', 'owner', 'description', 'logo', 'homepage_url',
                  'is_verified', 'is_permanently_closed', 'is_public', 'is_temporary', 'establishment_date',
                  'closure_date', 'created_at', 'modified_at', 'address', 'sports', 'images', 'amenities',
                  'opening_times',
                  )
        read_only_fields = ('uuid',)

    def create(self, validated_data):
        address_data = validated_data.pop('address')
        sports_data = validated_data.pop('sports')
        images_data = validated_data.pop('images')
        amenities_data = validated_data.pop('amenities')
        opening_times_data = validated_data.pop('opening_times')

        address = Address.objects.create(**address_data)
        spot = Spot.objects.create(address=address, **validated_data)
        spot.sports.add(*sports_data)

        # Created nested references
        for image_data in images_data:
            SpotImage.objects.create(spot=spot, **image_data)

        for amenity_data in amenities_data:
            SpotAmenity.objects.create(spot=spot, **amenity_data)

        for opening_time_data in opening_times_data:
            SpotOpeningTime.objects.create(spot=spot, **opening_time_data)

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

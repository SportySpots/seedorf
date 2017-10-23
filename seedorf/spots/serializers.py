from rest_framework import serializers

from .models import Spot, SpotAmenity, SpotImage, SpotOpeningTime


class SpotSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Spot
        fields = ('uuid', 'address', 'sports', 'name', 'slug', 'owner', 'description', 'logo', 'homepage_url',
                  'is_verified', 'is_permanently_closed', 'is_public', 'is_temporary', 'establishment_date',
                  'closure_date', 'created_at', 'modified_at', 'deleted_at')
        extra_kwargs = {
            'url': {'lookup_field': 'uuid'}
        }


class SpotAmenitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SpotAmenity,
        fields = ('uuid', 'spot', 'sport', 'data', 'created_at', 'modified_at', 'deleted_at')
        extra_kwargs = {
            'url': {'lookup_field': 'uuid'}
        }


class SpotImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SpotImage
        fields = ('uuid', 'image', 'is_flagged', 'is_user_submitted', 'created_at', 'modified_at', 'deleted_at')
        extra_kwargs = {
            'url': {'lookup_field': 'uuid'}
        }


class SpotOpeningTimeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SpotOpeningTime
        fields = ('uuid', 'spot', 'day', 'start_time', 'end_time', 'is_closed', 'created_at', 'modified_at',
                  'deleted_at')
        extra_kwargs = {
            'url': {'lookup_field': 'uuid'}
        }

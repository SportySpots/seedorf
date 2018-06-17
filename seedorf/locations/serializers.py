from rest_framework import serializers
from seedorf.spots.models import Spot

from .models import Address


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ('uuid', 'lat', 'lng', 'raw_address', 'formatted_address', 'created_at', 'modified_at',)
        read_only_fields = ('created_at', 'modified_at')

    def create(self, validated_data):
        spot_uuid = self.context['view'].kwargs['spot_uuid']
        spot = Spot.objects.get(uuid=spot_uuid)
        address = Address.objects.create(**validated_data)
        spot.address = address
        spot.save()
        return address

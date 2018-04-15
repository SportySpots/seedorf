from rest_framework import serializers

from .models import Address


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ('raw_address', 'formatted_address', 'location', 'lat', 'lng', 'plus_global_code',
                  'plus_local_code', 'created_at', 'modified_at',)
        extra_kwargs = {
            'url': {'lookup_field': 'uuid'}
        }
        read_only_fields = ('formatted_address', 'location', 'plus_global_code', 'plus_local_code')

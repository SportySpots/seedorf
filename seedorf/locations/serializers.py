from rest_framework_nested.serializers import NestedHyperlinkedModelSerializer

from .models import Address


class AddressNestedSerializer(NestedHyperlinkedModelSerializer):
    parent_lookup_kwargs = {
        'spot_uuid': 'spot__uuid'
    }

    class Meta:
        model = Address
        fields = ('uuid', 'lat', 'lng', 'raw_address', 'formatted_address', 'geocoder_service', 'raw_geocoder_response',
                  'created_at', 'modified_at',)
        read_only_fields = ('created_at', 'modified_at')

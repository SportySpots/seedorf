from rest_framework_nested.relations import NestedHyperlinkedIdentityField
from rest_framework_nested.serializers import NestedHyperlinkedModelSerializer

from .models import Address


class AddressSerializer(NestedHyperlinkedModelSerializer):
    parent_lookup_kwargs = {
        'spot_uuid': 'spot__uuid'
    }
    url = NestedHyperlinkedIdentityField(
        many=False,
        read_only=True,
        view_name='spot-address-detail',
        lookup_field='uuid',
        parent_lookup_kwargs={
            'spot_uuid': 'spot__uuid'
        }
    )

    class Meta:
        model = Address
        fields = ('url', 'uuid', 'raw_address', 'formatted_address', 'lat', 'lng', 'plus_global_code',
                  'plus_local_code', 'created_at', 'modified_at',)
        read_only_fields = ('formatted_address', 'plus_global_code', 'plus_local_code')

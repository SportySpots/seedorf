from rest_framework import viewsets

from seedorf.utils.regex import UUID as REGEX_UUID
from seedorf.utils.permissions import IsAdminOrReadOnly
from seedorf.locations.models import Address
from seedorf.locations.serializers import AddressSerializer


class AddressViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows spots to be viewed or edited.
    """
    serializer_class = AddressSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID
    # TODO: In the future, every user can create an adhoc spot
    permission_classes = (IsAdminOrReadOnly,)

    def get_queryset(self):
        return Address.objects.filter(spot__uuid=self.kwargs['spot_uuid'])

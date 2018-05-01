from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from seedorf.locations.models import Address
from seedorf.locations.serializers import AddressNestedSerializer
from seedorf.utils.permissions import IsAdminOrReadOnly
from seedorf.utils.regex import UUID as REGEX_UUID
from .models import Spot, SpotOpeningTime, SpotAmenity, SpotImage
from .serializers import SpotSerializer, SpotOpeningTimeNestedSerializer, SpotImageNestedSerializer, \
    SpotAmenityNestedSerializer, SpotNestedSerializer


class SpotViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows spots to be viewed or edited.
    """
    queryset = Spot.objects.filter(deleted_at=None)
    serializer_class = SpotSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID
    # TODO: In the future, every user can create an adhoc spot
    permission_classes = (IsAdminOrReadOnly,)


class SpotNestedViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows nested spots to be viewed or edited.
    """
    queryset = Spot.objects.filter(deleted_at=None)
    serializer_class = SpotNestedSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID
    # TODO: In the future, every user can create an adhoc spot
    permission_classes = (IsAuthenticatedOrReadOnly,)


class SpotAddressNestedViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows spot address to be viewed or edited.
    """
    queryset = Address.objects.filter(deleted_at=None)
    serializer_class = AddressNestedSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID
    # TODO: In the future, every user can create an adhoc spot
    permission_classes = (IsAdminOrReadOnly,)


class SpotOpeningTimeNestedViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows spot opening times to be viewed or edited
    """
    queryset = SpotOpeningTime.objects.filter(deleted_at=None)
    serializer_class = SpotOpeningTimeNestedSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAdminOrReadOnly,)


class SpotImageNestedViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows spot images to be viewed or edited
    """
    queryset = SpotImage.objects.filter(deleted_at=None)
    serializer_class = SpotImageNestedSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAdminOrReadOnly,)


class SpotAmenityNestedViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows spot amenities to be viewed or edited
    """
    queryset = SpotAmenity.objects.filter(deleted_at=None)
    serializer_class = SpotAmenityNestedSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAdminOrReadOnly,)

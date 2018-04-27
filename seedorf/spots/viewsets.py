from rest_framework import viewsets

from seedorf.locations.models import Address
from seedorf.locations.serializers import AddressNestedSerializer
from seedorf.sports.models import Sport
from seedorf.utils.permissions import IsAdminOrReadOnly
from seedorf.utils.regex import UUID as REGEX_UUID
from .models import Spot, SpotOpeningTime, SpotAmenity, SpotImage
from .serializers import SpotSerializer, SpotOpeningTimeNestedSerializer, SpotImageNestedSerializer, \
    SpotAmenityNestedSerializer, SpotSportNestedSerializer


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


class SpotAddressViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows spots to be viewed or edited.
    """
    queryset = Address.objects.filter(deleted_at=None)
    serializer_class = AddressNestedSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID
    # TODO: In the future, every user can create an adhoc spot
    permission_classes = (IsAdminOrReadOnly,)


class SpotOpeningTimeViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows spot opening times to be viewed or edited
    """
    queryset = SpotOpeningTime.objects.filter(deleted_at=None)
    serializer_class = SpotOpeningTimeNestedSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAdminOrReadOnly,)


class SpotImageViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows spot images to be viewed or edited
    """
    queryset = SpotImage.objects.filter(deleted_at=None)
    serializer_class = SpotImageNestedSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAdminOrReadOnly,)


class SpotAmenityViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows spot amenities to be viewed or edited
    """
    queryset = SpotAmenity.objects.filter(deleted_at=None)
    serializer_class = SpotAmenityNestedSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAdminOrReadOnly,)


class SpotSportViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows sports to be viewed.
    """
    queryset = Sport.objects.filter(deleted_at=None)
    serializer_class = SpotSportNestedSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAdminOrReadOnly,)

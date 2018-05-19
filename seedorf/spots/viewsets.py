from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from seedorf.locations.models import Address
from seedorf.locations.serializers import AddressSerializer
from seedorf.utils.permissions import IsAdminOrReadOnly
from seedorf.utils.regex import UUID as REGEX_UUID
from .models import Spot, SpotOpeningTime, SpotAmenity, SpotImage
from .serializers import SpotSerializer, SpotNestedSerializer, ImageSerializer, AmenitySerializer, OpeningTimeSerializer
from django.db.models import Q


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
    serializer_class = AddressSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID
    # TODO: In the future, every user can create an adhoc spot
    permission_classes = (IsAdminOrReadOnly,)

    def get_queryset(self):
        spot_uuid = self.kwargs['spot_uuid']
        return Address.objects.filter(spot__uuid=spot_uuid)


class SpotSportOpeningTimesNestedViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows spot opening times to be viewed or edited
    """
    serializer_class = OpeningTimeSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAdminOrReadOnly,)

    def get_queryset(self):
        spot_uuid = self.kwargs['spot_uuid']
        sport_uuid = self.kwargs['sport_uuid']
        return SpotOpeningTime.objects.filter(spot__uuid=spot_uuid, sport__uuid=sport_uuid)


class SpotSportAmenitesNestedViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows spot amenities belonging to a sport to be viewed or edited
    """
    serializer_class = AmenitySerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAdminOrReadOnly,)

    def get_queryset(self):
        spot_uuid = self.kwargs['spot_uuid']
        sport_uuid = self.kwargs['sport_uuid']
        return SpotAmenity.objects.filter(spot__uuid=spot_uuid, sport__uuid=sport_uuid)


class SpotSportImagesNestedViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows images of a sport on a spot to be viewed or edited
    """
    serializer_class = ImageSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAdminOrReadOnly,)

    def get_queryset(self):
        spot_uuid = self.kwargs['spot_uuid']
        sport_uuid = self.kwargs['sport_uuid']
        spot = Q(spot__uuid=spot_uuid)
        sport = Q(sport__uuid=sport_uuid)
        return SpotImage.objects.filter(sport & spot)

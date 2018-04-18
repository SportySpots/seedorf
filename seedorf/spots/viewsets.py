from rest_framework import viewsets

from seedorf.utils.permissions import IsAdminOrReadOnly
from seedorf.utils.regex import UUID as REGEX_UUID
from .models import Spot, SpotOpeningTime, SpotImage, SpotAmenity
from .serializers import SpotSerializer, SpotOpeningTimeSerializer, SpotImageSerializer, SpotAmenitySerializer


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


class SpotOpeningTimeViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows spot opening times to be viewed or edited
    """
    serializer_class = SpotOpeningTimeSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAdminOrReadOnly,)

    def get_queryset(self):
        return SpotOpeningTime.objects.filter(spot__uuid=self.kwargs['spot_uuid'])


class SpotImageViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows spot images to be viewed or edited
    """
    serializer_class = SpotImageSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAdminOrReadOnly,)

    def get_queryset(self):
        return SpotImage.objects.filter(spot__uuid=self.kwargs['spot_uuid'])


class SpotAmenityViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows spot amenities to be viewed or edited
    """
    serializer_class = SpotAmenitySerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAdminOrReadOnly,)

    def get_queryset(self):
        return SpotAmenity.objects.filter(spot__uuid=self.kwargs['spot_uuid'])


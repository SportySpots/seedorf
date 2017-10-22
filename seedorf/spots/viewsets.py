from rest_framework import viewsets

from seedorf.utils.regex import UUID as REGEX_UUID
from .models import Spot, SpotOpeningTime, SpotImage, SpotAmenity
from .serializers import SpotSerializer, SpotOpeningTimeSerializer, SpotImageSerializer, SpotAmenitySerializer


class SpotViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows spots to be viewed or edited.
    """
    queryset = Spot.objects.all()
    serializer_class = SpotSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID


class SpotOpeningTimeViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows spot opening times to be viewed or edited
    """
    queryset = SpotOpeningTime.objects.all()
    serializer_class = SpotOpeningTimeSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID


class SpotImageViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows spot images to be viewed or edited
    """
    queryset = SpotImage.objects.all()
    serializer_class = SpotImageSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID


class SpotAmenityTimeViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows spot amenities to be viewed or edited
    """
    queryset = SpotAmenity.objects.all()
    serializer_class = SpotAmenitySerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID


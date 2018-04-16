from rest_framework import viewsets

from seedorf.utils.regex import UUID as REGEX_UUID
from .models import Spot, SpotOpeningTime, SpotImage, SpotAmenity
from .serializers import SpotSerializer, SpotOpeningTimeSerializer, SpotImageSerializer, SpotAmenitySerializer
from seedorf.utils.permissions import IsAdminOrReadOnly
from rest_framework.decorators import action
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from seedorf.locations.models import Address
from seedorf.locations.serializers import AddressSerializer
from seedorf.sports.serializers import SportSerializer


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

    # @action(methods=['GET', 'POST', 'PUT', 'OPTIONS', 'DELETE'], detail=True)
    # def address(self, request, uuid=None):
    #     spot = self.get_object()
    #     serializer = AddressSerializer(spot.address)
    #     return Response(serializer.data)
    #
    # @action(methods=['GET', 'POST', 'PUT', 'OPTIONS', 'DELETE'], detail=True)
    # def sports(self, request, uuid=None):
    #     spot = self.get_object()
    #     serializer = SportSerializer(spot.sports, many=True)
    #     return Response(serializer.data)
    #
    # @action(methods=['GET', 'POST', 'PUT', 'OPTIONS', 'DELETE'], detail=True)
    # def amenities(self, request, uuid=None):
    #     spot = self.get_object()
    #     serializer = SpotAmenitySerializer(spot.amenities, many=True)
    #     return Response(serializer.data)
    #
    # @action(methods=['GET', 'POST', 'PUT', 'OPTIONS', 'DELETE'], detail=True)
    # def images(self, request, uuid=None):
    #     spot = self.get_object()
    #     serializer = SpotImageSerializer(spot.images, many=True)
    #     return Response(serializer.data)
    #
    # @action(methods=['GET', 'POST', 'PUT', 'OPTIONS', 'DELETE'], detail=True, url_path='opening-times')
    # def opening_times(self, request, uuid=None):
    #     spot = self.get_object()
    #     serializer = SpotOpeningTimeSerializer(spot.opening_times, many=True)
    #     return Response(serializer.data)


class SpotOpeningTimeViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows spot opening times to be viewed or edited
    """
    # queryset = SpotOpeningTime.objects.all()
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
    # queryset = SpotImage.objects.filter(deleted_at=None)
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
    # queryset = SpotAmenity.objects.filter(deleted_at=None)
    serializer_class = SpotAmenitySerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAdminOrReadOnly,)

    def get_queryset(self):
        return SpotAmenity.objects.filter(spot__uuid=self.kwargs['spot_uuid'])


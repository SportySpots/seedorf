from django.contrib.gis.geos import GEOSGeometry
from django.contrib.gis.measure import D
from django.db.models import Q
from django_filters import rest_framework as filters
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework_gis.filters import DistanceToPointFilter

from seedorf.games.serializers import GameSpotNestedSerializer
from seedorf.locations.models import Address
from seedorf.locations.serializers import AddressSerializer
from seedorf.sports.models import Sport
from seedorf.utils.permissions import IsAdminOrReadOnly
from seedorf.utils.regex import UUID as REGEX_UUID
from .models import Spot, SpotOpeningTime, SpotAmenity, SpotImage
from .serializers import (
    SpotSerializer,
    ImageSerializer,
    AmenitySerializer,
    OpeningTimeSerializer,
)


class SpotFilter(filters.FilterSet):
    sports__ids = filters.ModelMultipleChoiceFilter(field_name="sports", queryset=Sport.objects.all())
    distance = filters.CharFilter(field_name="address__point", method="filter_by_distance")

    # def filter_m2m(self, qs, name, value):
    #     for instance in value:
    #         qs = qs.filter(**{name: instance.id})
    #     return qs

    class Meta:
        model = Spot
        strict = True
        fields = {
            "sports__category": ["exact"],
            # 'sports__uuid': ['exact', ],
            "name": ["exact", "icontains"],
            "owner": ["exact", "icontains"],
            "is_verified": ["exact"],
            "is_permanently_closed": ["exact"],
            "is_public": ["exact"],
            "is_temporary": ["exact"],
        }

    # REF: https://django-filter.readthedocs.io/en/master/ref/filters.html#method
    @staticmethod
    def filter_by_distance(queryset, name, value):
        # TODO: Validate distance is integer, and the lat and lng values are valid
        distance, lat, lng = value.split(":")

        # REF: https://docs.djangoproject.com/en/2.0/ref/contrib/gis/db-api/#distance-lookups
        pnt = GEOSGeometry("POINT({lng} {lat})".format(lng=lng, lat=lat), srid=4326)
        lookup = "__".join([name, "distance_lte"])
        return queryset.filter(**{lookup: (pnt, D(m=int(distance)))})


class SpotViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows spots to be viewed or edited.
    """

    queryset = Spot.objects.filter(deleted_at=None)
    serializer_class = SpotSerializer
    lookup_field = "uuid"
    lookup_value_regex = REGEX_UUID
    # TODO: In the future, every user can create an adhoc spot
    permission_classes = (IsAdminOrReadOnly,)
    distance_filter_field = "address__point"
    distance_filter_convert_meters = True
    filter_backends = (filters.DjangoFilterBackend, DistanceToPointFilter)
    filter_class = SpotFilter


class SpotAddressNestedViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows spot address to be viewed or edited.
    """

    serializer_class = AddressSerializer
    lookup_field = "uuid"
    lookup_value_regex = REGEX_UUID
    # TODO: In the future, every user can create an adhoc spot
    permission_classes = (IsAdminOrReadOnly,)

    def get_queryset(self):
        spot_uuid = self.kwargs["spot_uuid"]
        return Address.objects.filter(spot__uuid=spot_uuid)


class SpotSportOpeningTimesNestedViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows spot opening times to be viewed or edited
    """

    serializer_class = OpeningTimeSerializer
    lookup_field = "uuid"
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAdminOrReadOnly,)

    def get_queryset(self):
        spot_uuid = self.kwargs["spot_uuid"]
        sport_uuid = self.kwargs["sport_uuid"]
        return SpotOpeningTime.objects.filter(spot__uuid=spot_uuid, sport__uuid=sport_uuid)


class SpotSportAmenitesNestedViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows spot amenities belonging to a sport to be viewed or edited
    """

    serializer_class = AmenitySerializer
    lookup_field = "uuid"
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAdminOrReadOnly,)

    def get_queryset(self):
        spot_uuid = self.kwargs["spot_uuid"]
        sport_uuid = self.kwargs["sport_uuid"]
        return SpotAmenity.objects.filter(spot__uuid=spot_uuid, sport__uuid=sport_uuid)


class SpotSportImagesNestedViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows images of a sport on a spot to be viewed or edited
    """

    serializer_class = ImageSerializer
    lookup_field = "uuid"
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAdminOrReadOnly,)

    def get_queryset(self):
        spot_uuid = self.kwargs["spot_uuid"]
        sport_uuid = self.kwargs["sport_uuid"]
        spot = Q(spot__uuid=spot_uuid)
        sport = Q(sport__uuid=sport_uuid)
        return SpotImage.objects.filter(sport & spot)


class GameSpotNestedViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows nested spot to be viewed or edited per game.
    """

    serializer_class = GameSpotNestedSerializer
    lookup_field = "uuid"
    lookup_value_regex = REGEX_UUID
    # TODO: In the future, every user can create an adhoc spot
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        game_uuid = self.kwargs["game_uuid"]
        return Spot.objects.filter(spot_games__uuid=game_uuid)

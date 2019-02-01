from .models import Game, RsvpStatus
from django.contrib.gis.geos import GEOSGeometry
from django.contrib.gis.measure import D
from django_filters import rest_framework as filters


class GameFilter(filters.FilterSet):
    distance = filters.CharFilter(
        field_name="spot__address__point",
        method="filter_by_distance"
    )

    class Meta:
        model = Game
        fields = {
            "organizer__uuid": ["exact"],
            "sport__uuid": ["exact"],
            "sport__category": ["exact"],
            "spot__uuid": ["exact"],
            "spot__name": ["exact", "icontains"],
            "name": ["exact", "icontains"],
            "start_time": ["lte", "gte"],
            "end_time": ["lte", "gte"],
            "rsvp_open_time": ["lte", "gte"],
            "rsvp_close_time": ["lte", "gte"],
            "rsvp_closed": ["exact"],
            "status": ["exact"],
            "invite_mode": ["exact"],
            "capacity": ["lte", "gte"],
            "show_remaining": ["exact"],
            "is_listed": ["exact"],
            "is_shareable": ["exact"],
            "is_featured": ["exact"],
        }

    # REF: https://django-filter.readthedocs.io/en/master/ref/filters.html#method
    @staticmethod
    def filter_by_distance(queryset, name, value):
        # TODO: Validate distance is integer, and the lat and lng values are valid
        distance, lat, lng = value.split(":")

        # REF: https://docs.djangoproject.com/en/2.0/ref/contrib/gis/db-api/#distance-lookups
        ref_location = GEOSGeometry(f"POINT({lng} {lat})", srid=4326)
        lookup = f"{name}__distance_lte"
        return queryset.filter(**{lookup: (ref_location, D(m=int(distance)))})


class RsvpStatusFilter(filters.FilterSet):
    class Meta:
        model = RsvpStatus
        fields = {
            "game__uuid": ["exact"],
            "user__uuid": ["exact"],
            "status": ["exact"]
         }

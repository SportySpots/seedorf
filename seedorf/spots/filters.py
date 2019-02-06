from django.contrib.gis.geos import GEOSGeometry
from django.contrib.gis.measure import D
from django_filters import rest_framework as filters

from seedorf.sports.models import Sport
from .models import Spot


class SpotFilter(filters.FilterSet):
    sports__ids = filters.ModelMultipleChoiceFilter(
        field_name="sports", queryset=Sport.objects.all()
    )
    distance = filters.CharFilter(
        field_name="address__point", method="filter_by_distance"
    )

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
        ref_location = GEOSGeometry(f"POINT({lng} {lat})", srid=4326)
        lookup = f"{name}__distance_lte"
        return queryset.filter(**{lookup: (ref_location, D(m=int(distance)))})
        # .annotate(distance=Distance("location", ref_location)).order_by("distance")

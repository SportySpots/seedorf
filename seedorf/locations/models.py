from django.contrib.gis.db import models as gis_models
from django.contrib.postgres.fields import JSONField
from django.db import models
from django.utils.translation import ugettext_lazy as _


class Place(models.Model):
    GEOCODER_GOOGLE_MAPS = 'google'
    GEOCODER_BING = 'bing'
    GEOCODER_OSM = 'open_street_maps'
    GEOCODER_HERE = 'here'
    GEOCODER_MANUAL = 'manual'

    GEOCODERS = (
        (GEOCODER_GOOGLE_MAPS, _('Google')),
        (GEOCODER_BING, _('Bing')),
        (GEOCODER_OSM, _('Open Street Maps')),
        (GEOCODER_HERE, _('Here Maps')),
        (GEOCODER_MANUAL, _('Manual'))
    )

    raw_address = models.CharField(
        blank=False,
        max_length=255,
        null=False
    )
    raw_response = JSONField(
        blank=True,
        help_text=_('Raw api response from the geocoder service. e.g. google maps'),
        null=False
    )
    geocoder = models.CharField(
        blank=False,
        choices=GEOCODERS,
        default=GEOCODER_MANUAL,
        help_text=_('Geocoder used to convert raw address into latlong coordinates.'),
        max_length=25,
        null=True
    )
    formatted_address = models.CharField(
        blank=True,
        max_length=255,
        null=False
    )

    location = gis_models.PointField()
    location_type = None  # REF: Google Maps https://developers.google.com/maps/documentation/geocoding/start
    viewport = None  # REF: Google Maps https://developers.google.com/maps/documentation/geocoding/start
    types = None  # REF: Google Maps https://developers.google.com/maps/documentation/geocoding/start
    city = None  # REF: Maybe use django-cities
    country = None  # REF: Maybe use django-cities
    utc_offset= None  # REF: Maybe use django-cities

    class Meta:
        pass

from django.contrib.gis.db import models as gis_models
from django.contrib.postgres.fields import JSONField
from django.db import models
from django.utils.translation import ugettext_lazy as _

from seedorf.utils.models import BasePropertiesModel


class Address(BasePropertiesModel):
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
        blank=True,
        default='',
        help_text=_('Complete address'),
        max_length=1024,
        null=False,
        verbose_name=_('Address')
    )
    raw_geocoder_response = JSONField(
        blank=True,
        help_text=_('Raw api response from the geocoder service. e.g. google maps'),
        null=True,
        verbose_name=_('Raw Geocoder Response')
    )
    geocoder_service = models.CharField(
        blank=False,
        choices=GEOCODERS,
        default=GEOCODER_MANUAL,
        help_text=_('Geocoder used to convert raw address into latlong coordinates.'),
        max_length=25,
        null=True,
        verbose_name=_('Geocoder')
    )
    formatted_address = models.CharField(
        blank=True,
        help_text=_('Formatted address returned by the geocoding service'),
        max_length=1024,
        null=False,
        verbose_name=_('Formatted Address')
    )
    lat = models.DecimalField(
        blank=True,
        decimal_places=15,
        max_digits=18,
        null=True,
        verbose_name=_('Latitude')
    )
    lng = models.DecimalField(
        blank=True,
        decimal_places=15,
        max_digits=18,
        null=True,
        verbose_name=_('Longtiude')
    )
    # TODO: https://plus.codes/
    plus_global_code = models.CharField(
        blank=True,
        max_length=255,
        null=True,
        verbose_name=_('Google Plus Global Code')
    )
    plus_local_code = models.CharField(
        blank=True,
        max_length=255,
        null=True,
        verbose_name=_('Google Plus Local Code')

    )

    # location_type = None  # REF: Google Maps https://developers.google.com/maps/documentation/geocoding/start
    # viewport = None  # REF: Google Maps https://developers.google.com/maps/documentation/geocoding/start
    # types = None  # REF: Google Maps https://developers.google.com/maps/documentation/geocoding/start
    # city = None  # REF: Maybe use django-cities
    # country = None  # REF: Maybe use django-cities
    # utc_offset= None  # REF: Maybe use django-cities

    class Meta:
        verbose_name = _('Address')
        verbose_name_plural = _('Addresses')

    def __str__(self):
        return self.raw_address

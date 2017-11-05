import datetime

from django.contrib.contenttypes.fields import GenericRelation
from django.contrib.postgres.fields import JSONField
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django_extensions.db.fields import AutoSlugField
from django_extensions.db.models import TimeStampedModel

from seedorf.utils.models import BasePropertiesModel
from . import AMENITIES_TYPE
from .validators import AllowedKeysValidator


def get_logo_upload_directory(instance, filename):
    # file will be uploaded to MEDIA_ROOT/spots/<uuid>/logo/<filename>
    # TODO: Test for files names with non latin characters
    # TODO: Upload files to CDN
    return 'spots/{0}/logo/{1}'.format(instance.uuid, filename)


def get_images_upload_directory(instance, filename):
    # file will be uploaded to MEDIA_ROOT/spots/<uuid>/images/<filename>
    # TODO: Test for files names with non latin characters
    # TODO: Upload files to CDN
    return 'spots/{0}/images/{1}'.format(instance.uuid, filename)


class Spot(BasePropertiesModel):
    # Foreign Keys
    # TODO: Validation there can be only one non-permanently closed spot at an address
    address = models.ForeignKey(
        'locations.Address',
        related_name='spot_address'
    )
    sports = models.ManyToManyField(
        'sports.Sport',
        related_name='sport_spots',
    )

    # Instance Fields
    name = models.CharField(
        blank=False,
        max_length=255,
        null=False,
        verbose_name=_('Spot Name'),
    )
    slug = AutoSlugField(
        blank=False,
        editable=True,
        populate_from='name',
        unique=True,
        verbose_name=_('Spot Slug'),
    )
    owner = models.CharField(
        blank=True,
        default='',
        max_length=255,
        null=False,
        unique=True,
        verbose_name=_('Spot Owner'),
    )
    description = models.TextField(
        blank=True,
        default='',
        max_length=4096,
        null=False,
        verbose_name=_('Spot Description'),
    )
    logo = models.ImageField(
        blank=True,
        max_length=255,
        null=False,
        upload_to=get_logo_upload_directory,
        verbose_name=_('Spot Logo'),
    )
    homepage_url = models.URLField(
        blank=True,
        help_text=_('Where can we find out more about this spot ?'),
        max_length=500,
        null=False,
        verbose_name=_('Spot Homepage URL'),
    )
    is_verified = models.BooleanField(
        blank=False,
        default=False,
        help_text=_('Is this Spot verfified by the SportySpots team ?'),
        null=False,
    )
    is_permanently_closed = models.BooleanField(
        blank=False,
        default=False,
        help_text=_('Is this Spot permanently closed ?'),
        null=False,
    )
    is_public = models.BooleanField(
        blank=False,
        default=True,
        help_text=_('Is this Spot a public spot ?')
    )
    # TODO: We need a cron job to set temporary spots are permanently closed
    # TODO: We need to validate if the spot is temporary, then it must have a establishment date and closure date
    is_temporary = models.BooleanField(
        blank=False,
        default=False,
        help_text=_('Is this spot temporary (e.g. for a special event) ?'),
        null=False,
    )
    establishment_date = models.DateField(
        blank=True,
        null=False
    )
    # NOTE: Closure date can be in the future, incase of temporary events
    closure_date = models.DateField(
        blank=True,
        null=False
    )

    # Generic Keys
    reaction = GenericRelation(
        'reactions.Reaction',
        related_query_name='spot_reactions',
    )

    class Meta:
        verbose_name = _('Spot')
        verbose_name_plural = _('Spots')
        ordering = ('-created_at',)

    def __str__(self):
        return self.name


class SpotImage(BasePropertiesModel):
    # Foreign Keys
    spot = models.ForeignKey(
        'spots.Spot',
        on_delete=models.CASCADE,
        related_name='spot_images',
    )

    # Instance Fields
    image = models.ImageField(
        blank=True,
        null=False,
        upload_to=get_images_upload_directory,
    )
    is_flagged = models.BooleanField(
        default=False,
        help_text=_('Is this image marked as offensive/ non-relevant ?'),
    )
    is_user_submitted = models.BooleanField(
        default=True,
        editable=False,
        help_text=_('Is this image submitted by the user ?'),
    )

    class Meta:
        verbose_name = _('Spot Image')
        verbose_name_plural = _('Spot Images')
        ordering = ('-created_at',)

    def __str__(self):
        return self.uuid


class SpotOpeningTime(models.Model):
    """
    TODO: Validation
    A spot can have multiple opening times during a day
    A spot can be closed for the whole day or for the certain time in a day
    A spot can be closed yearly for a certain days like public holidays
    A spot can be closed for certain times of the year
    A spot can be closed can be closed on special adhoc days

    """
    DAY_MONDAY = 1
    DAY_TUESDAY = 2
    DAY_WEDNESDAY = 3
    DAY_THURSDAY = 4
    DAY_FRIDAY = 5
    DAY_SATURDAY = 6
    DAY_SUNDAY = 7

    DAYS = (
        (DAY_MONDAY,_('Monday')),
        (DAY_TUESDAY, _('Tuesday')),
        (DAY_WEDNESDAY, _('Wednesday')),
        (DAY_THURSDAY, _('Thursday')),
        (DAY_FRIDAY, _('Friday')),
        (DAY_SATURDAY, _('Saturday')),
        (DAY_SUNDAY, _('Sunday')),
    )

    spot = models.ForeignKey(
        'spots.Spot',
        on_delete=models.CASCADE,
        related_name='spot_opening_times',
    )
    day = models.CharField(
        blank=False,
        choices=DAYS,
        max_length=25,
        null=False,
    )
    start_time = models.TimeField(
        blank=False,
        default=datetime.time(0, 0, 0, 0),
    )
    end_time = models.TimeField(
        blank=False,
        default=datetime.time(23, 59, 59, 999999),
    )
    is_closed = models.BooleanField(
        blank=False,
        default=False,
    )

    class Meta:
        verbose_name = _('Spot Image')
        verbose_name_plural = _('Spot Images')

    def __str__(self):
        # TODO: Test if the day is properly translated in different languages
        return _('Day: {day} Open: {is_closed} From: {start_time} Until: {end_time}'
                 .format(day=self.get_day_display(),
                         is_closed=self.is_closed,
                         start_time=self.start_time,
                         end_time=self.end_time
                         )
                 )


class SpotAmenity(models.Model):
    # Foreign Keys
    spot = models.ForeignKey(
        'spots.Spot',
        on_delete=models.CASCADE,
        related_name='spot_amenities',
        verbose_name=_('Spot Amenity'),
    )
    sport = models.ForeignKey(
        'sports.Sport',
        on_delete=models.CASCADE,
        related_name='sports_amenities',
        verbose_name=_('Sport Amenity'),
    )

    # Instance Fields
    data = JSONField(
        validators=[AllowedKeysValidator(list(AMENITIES_TYPE.keys()))]
    )

    class Meta:
        verbose_name = _('Spot Amenity')
        verbose_name_plural = _('Spot Amenities')

    def __str__(self):
        # TODO: Return name of sport, key and value pairs of data
        return '{}'.format(self.data)

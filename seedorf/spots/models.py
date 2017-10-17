import datetime

from django.conf import settings
from django.contrib.postgres.fields import JSONField
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django_extensions.db.fields import AutoSlugField
from django_extensions.db.models import TimeStampedModel
from django.contrib.contenttypes.fields import GenericRelation

from seedorf.utils.mixins import CommonModelPropertiesMixin
from . import AMENITIES_TYPE
from .validators import AllowedKeysValidator

"""
REF Standards:

Currency : ISO 4217
Time:
Geography: 
Language: 
"""

"""
Spots

* Spots have a non-unique name (names should be localizable)
* Only one spot can belong to one geo-location
* Spots have a size (in sq. m but this should be localizable)
* Spots can be indoor, outdoor, covered, non-covered
* Spots can have opening times during the week, during the year and be closed on certain days of the year
* Spots can have various types of surfaces
* Spots could have age group restrictions
* Spots could be closed down
* One spot could have multiple sports (e.g. park, sports stadium, sport club) spot_type=multi_sport
* Spots could require membership
* Spots could have ratings
* Spots could have descriptions (should be localizable)
* Spots could have what3words address
* Spots have an address
* Spots could have facilities
* Spots could have their own website or links to more info on the municipality website
* Spots have a founding date
* Spots could have closing/closed date
* Spots could be temporary (for e.g festivals)
* Hide the creation date and modification date in the api
* Spots will have pictures assoicated with them
* Spot pictures could also be user added
* Spot could have a social profile / page on twitter/ facebook etc
* Spot could be permanently closed
* Spot could be verified
* Spot could have stats
stats	Contains checkinsCount (total checkins ever here), usersCount (total users who have ever checked in here), and tipCount (number of tips here).
* Spots could have popular hours
* Spots could have a price category
https://developer.foursquare.com/docs/api/venues/details
* Spots could have herenow / games on now / occupied now
* Spots could be tagged
* Spots could be favourited by the user
* Spots could have a been here for the user
* Spots can have canonical url
* Spot could have likes
* Spot could have liked by user
* Spot could have been disliked by user
* Spot could have geometry
* Spot has a local timezone
* Spot could have multiple emails or phone numbers

  "location": {
     "address": "W 4th St",
     "crossStreet": "btwn MacDougal St & University Pl",
     "lat": 40.73076755657555,
     "lng": -73.99745069069391,
     "distance": 0,
     "postalCode": "10012",
     "cc": "US",
     "city": "New York",
     "state": "NY",
     "country": "United States"
     //...
  },
    "categories": [
     {
        "id": "4bf58dd8d48988d163941735",
        "name": "Park",
        "pluralName": "Parks",
        "shortName": "Park",
        "icon": {
          "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/park_",
          "suffix": ".png"
        },
        "primary": true
     }
  ],
  "
    "stats": {
        "checkinsCount": 190068,
        "usersCount": 74788,
        "tipCount": 652
  },
  
"""


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


class Spot(CommonModelPropertiesMixin):
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
    url = models.URLField(
        blank=True,
        help_text=_('Where can we find out more about this spot ?'),
        max_length=500,
        null=False,
        verbose_name=_('Spot Homepage URL'),
    )
    is_verified = models.BooleanField(
        blank=False,
        default=False,
        help_text=_('Is Spot verfified by the SportySpots team ?'),
        null=False,
    )
    is_permanently_closed = models.BooleanField(
        blank=False,
        default=False,
        help_text=_('Is Spot permanently closed ?'),
        null=False,
    )
    sports = models.ManyToManyField(
        'sports.Sport',
        related_name='sport_spots',
    )
    reaction = GenericRelation(
        'reactions.Reaction',
        related_query_name='spot_reactions',
    )

    class Meta:
        verbose_name = _('Spot')
        verbose_name_plural = _('Spots')
        ordering = ('-created_at',)


class SpotImage(CommonModelPropertiesMixin):
    spot = models.ForeignKey(
        'spots.Spot',
        on_delete=models.CASCADE,
        related_name='spot_images',
    )
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


class SpotOpeningTime(models.Model):
    """
    TODO: Add validation
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
    data = JSONField(
        validators=[AllowedKeysValidator(list(AMENITIES_TYPE.keys()))]
    )

    class Meta:
        verbose_name = _('Spot Amenity')
        verbose_name_plural = _('Spot Amenities')

    def __str__(self):
        # TODO: Return name of sport, key and value
        return '{}'.format(self.data)


# class SocialMediaProfile(models.Model):
#     FACEBOOK = 'facebook'
#     TWITTER = 'twitter'
#     INSTAGRAM = 'instagram'
#     SOCIAL_NETWORK_CHOICES = (
#         (FACEBOOK, _('Facebook')),
#         (TWITTER, _('Twitter')),
#         (INSTAGRAM, _('Instagram')),
#     )
#     spot = models.OneToOneField(
#         Spot,
#         on_delete=models.CASCADE,
#         related_name='spot_social_media_profiles'
#     )
#     network = models.CharField(
#         blank=True,
#         choices=SOCIAL_NETWORK_CHOICES,
#         max_length=20,
#         null=False,
#     )
#     handle = models.CharField(
#         blank=True,
#         help_text=_('E.g. Twitter: @sportyspots'),
#         max_length=255,
#         null=False,
#         verbose_name=_('Social Media Handle'),
#     )
#     url = models.URLField(
#         blank=False,
#         max_length=500,
#         null=False,
#         verbose_name=_('Social Media Profile Page'),
#     )
#
#     class Meta:
#         verbose_name = _('Social Media Profile')
#         verbose_name_plural = _('Social Media Profiles')
#
#     def __str__(self):
#         return '{}: {}'.format(self.type, self.url)


# class SpotLike(CommonModelPropertiesMixin, models.Model):
#     spot = models.ForeignKey(
#         Spot,
#         on_delete=models.CASCADE,
#         related_name='spot_likes'
#     )
#     user = models.ForeignKey(
#         settings.AUTH_USER_MODEL,
#         on_delete=models.CASCADE,
#         related_name='user_likes'
#     )
#     like = models.NullBooleanField(
#
#     )
#
#
# class SpotStat(models.Model):
#     spot = models.ForeignKey(
#         Spot,
#         on_delete=models.CASCADE,
#         related_name='spot_stats'
#     )
#     checkin_counts = models.IntegerField(default=0, null=False)
#     likes_counts = models.IntegerField(default=0, null=False)
#     rating = models.FloatField()

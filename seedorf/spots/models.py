import uuid

from django.db import models
from django_extensions.db.models import TimeStampedModel
from django_extensions.db.fields import AutoSlugField
from django.utils.translation import ugettext_lazy as _

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


class Spot(TimeStampedModel):
    uuid = models.UUIDField(
        blank=False,
        default=uuid.uuid4,
        editable=False,
        null=False
    )
    name = models.CharField(
        blank=False,
        null=False
    )
    slug = AutoSlugField(
        blank=False,
        editable=True,
        populate_from='name',
        unique=True
    )

    class Meta:
        verbose_name = _('Spot')
        verbose_name_plural = _('Spots')
        ordering = ['created']


import datetime

from django.contrib.contenttypes.fields import GenericRelation
from django.contrib.postgres.fields import JSONField
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django_extensions.db.fields import AutoSlugField

from seedorf.utils.models import BasePropertiesModel
from .validators import AllowedKeysValidator


def get_logo_upload_directory(instance, filename):
    # file will be uploaded to MEDIA_ROOT/spots/<uuid>/logo/<filename>
    # TODO: Test for files names with non latin characters
    # TODO: Upload files to CDN
    return f"spots/{instance.uuid}/logo/{filename}"


def get_images_upload_directory(instance, filename):
    # file will be uploaded to MEDIA_ROOT/spots/<uuid>/images/<filename>
    # TODO: Test for files names with non latin characters
    # TODO: Upload files to CDN
    return f"spots/{instance.uuid}/images/{filename}"


class Spot(BasePropertiesModel):
    # Foreign Keys
    # TODO: Validation there can be only one non-permanently closed spot at an address
    address = models.OneToOneField(
        "locations.Address",
        blank=True,
        null=True,
        related_name="spot",
        on_delete=models.CASCADE,
        verbose_name=_("Address"),
    )
    sports = models.ManyToManyField("sports.Sport", blank=True, related_name="spots", verbose_name=_("Sports"))

    # Instance Fields
    name = models.CharField(blank=False, max_length=512, null=False, verbose_name=_("Name"))
    slug = AutoSlugField(
        blank=True, editable=True, max_length=512, populate_from="name", unique=True, verbose_name=_("Slug")
    )
    owner = models.CharField(blank=True, default="", max_length=512, null=False, verbose_name=_("Owner"))
    description = models.TextField(blank=True, default="", max_length=4096, null=False, verbose_name=_("Description"))
    logo = models.ImageField(
        blank=True, max_length=512, null=False, upload_to=get_logo_upload_directory, verbose_name=_("Logo")
    )
    homepage_url = models.URLField(
        blank=True,
        help_text=_("Where can we find out more about this spot ?"),
        max_length=512,
        null=False,
        verbose_name=_("Homepage URL"),
    )
    is_verified = models.BooleanField(
        blank=False, default=False, help_text=_("Is this Spot verfified by the SportySpots team ?"), null=False
    )
    is_permanently_closed = models.BooleanField(
        blank=False, default=False, help_text=_("Is this Spot permanently closed ?"), null=False
    )
    is_public = models.BooleanField(blank=False, default=True, help_text=_("Is this Spot a public spot ?"))
    # TODO: We need a cron job to set temporary spots are permanently closed
    # TODO: We need to validate if the spot is temporary, then it must have a establishment date and closure date
    is_temporary = models.BooleanField(
        blank=False, default=False, help_text=_("Is this spot temporary (e.g. for a special event) ?"), null=False
    )
    establishment_date = models.DateField(blank=True, null=True)
    # NOTE: Closure date can be in the future, incase of temporary events
    closure_date = models.DateField(blank=True, null=True)

    # Generic Keys
    reaction = GenericRelation("reactions.Reaction", related_query_name="spot_reactions")

    class Meta:
        verbose_name = _("Spot")
        verbose_name_plural = _("Spots")
        ordering = ("-created_at",)

    def __str__(self):
        return f"{self.name}"


class SpotImage(BasePropertiesModel):
    # Foreign Keys
    spot = models.ForeignKey(
        "spots.Spot", blank=False, null=False, on_delete=models.CASCADE, related_name="images", verbose_name=_("Spot")
    )
    sport = models.ForeignKey(
        "sports.Sport",
        blank=False,
        null=False,
        on_delete=models.CASCADE,
        related_name="images",
        verbose_name=_("Sport"),
    )

    # Instance Fields
    image = models.ImageField(blank=False, max_length=512, null=False, upload_to=get_images_upload_directory)
    is_flagged = models.BooleanField(
        default=False, editable=False, help_text=_("Is this image marked as offensive/ non-relevant ?")
    )
    is_user_submitted = models.BooleanField(
        default=True, editable=False, help_text=_("Is this image submitted by the user ?")
    )

    class Meta:
        verbose_name = _("Spot Image")
        verbose_name_plural = _("Spot Images")
        ordering = ("-created_at",)

    def __str__(self):
        return f"{self.spot.name} : {self.sport.name}"


class SpotOpeningTime(BasePropertiesModel):
    """
    TODO: Validation
    A spot can have multiple opening times during a day
    A spot can be closed for the whole day or for the certain time in a day
    A spot can be closed yearly for a certain days like public holidays
    A spot can be closed for certain times of the year
    A spot can be closed can be closed on special adhoc days

    """

    DAY_MONDAY = "MONDAY"
    DAY_TUESDAY = "TUESDAY"
    DAY_WEDNESDAY = "WEDNESDAY"
    DAY_THURSDAY = "THURSDAY"
    DAY_FRIDAY = "FRIDAY"
    DAY_SATURDAY = "SATURDAY"
    DAY_SUNDAY = "SUNDAY"

    DAYS = (
        (DAY_MONDAY, _("Monday")),
        (DAY_TUESDAY, _("Tuesday")),
        (DAY_WEDNESDAY, _("Wednesday")),
        (DAY_THURSDAY, _("Thursday")),
        (DAY_FRIDAY, _("Friday")),
        (DAY_SATURDAY, _("Saturday")),
        (DAY_SUNDAY, _("Sunday")),
    )

    spot = models.ForeignKey(
        "spots.Spot",
        blank=False,
        null=False,
        on_delete=models.CASCADE,
        related_name="opening_times",
        verbose_name=_("Spot"),
    )
    sport = models.ForeignKey(
        "sports.Sport",
        blank=False,
        null=False,
        on_delete=models.CASCADE,
        related_name="opening_times",
        verbose_name=_("Sport"),
    )
    day = models.CharField(blank=False, choices=DAYS, max_length=25, null=False)
    start_time = models.TimeField(blank=False, default=datetime.time(0, 0, 0, 0))
    end_time = models.TimeField(blank=False, default=datetime.time(23, 59, 59, 999999))
    is_closed = models.BooleanField(blank=False, default=False)

    class Meta:
        verbose_name = _("Spot Opening Time")
        verbose_name_plural = _("Spot Opening Times")
        ordering = ("-created_at",)

    def __str__(self):
        return f"{self.spot.name} : {self.sport.name}"


AMENITIES_TYPE_SCHEMA = {
    "INDOOR": {"type": "boolean"},
    "OUTDOOR": {"type": "boolean"},
    "WIDTH": {"type": "integer"},
    "BREADTH": {"type": "integer"},
    "SIZE": {"type": "integer"},
    "HAS_FLOODLIGHTS": {"type": "boolean"},
    "SURFACE": {"type": "string"},
    "LOCATION": {"type": "string", "allowed": [""]},
    "FENCE": {"type": "boolean"},
    "FIELD_MARKINGS": {"type": "boolean"},
    "SOCCER_GOALS_ONE_SIDED": {"type": "boolean"},
    "SOCCER_GOALS_BOTH_SIDED": {"type": "boolean"},
    "SOCCER_GOALS_SIZE": {"type": "string", "allowed": [""]},
    "BASKETBALL_POLE_ONE_SIDED": {"type": "boolean"},
    "BASKETBALL_POLE_BOTH_SIDED": {"type": "boolean"},
    "MULTISPORT_FIELD": {"type": "boolean"},
}


class SpotAmenity(BasePropertiesModel):
    # Foreign Keys
    spot = models.ForeignKey(
        "spots.Spot",
        blank=False,
        null=False,
        on_delete=models.CASCADE,
        related_name="amenities",
        verbose_name=_("Spot"),
    )
    sport = models.ForeignKey(
        "sports.Sport",
        blank=False,
        null=False,
        on_delete=models.CASCADE,
        related_name="amenities",
        verbose_name=_("Sport"),
    )

    # Instance Fields
    data = JSONField(validators=[AllowedKeysValidator(list(AMENITIES_TYPE_SCHEMA.keys()))])

    class Meta:
        verbose_name = _("Spot Amenity")
        verbose_name_plural = _("Spot Amenities")
        ordering = ("-created_at",)

    def __str__(self):
        return f"{self.spot.name} : {self.sport.name}"

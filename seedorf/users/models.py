from datetime import date

from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.core.urlresolvers import reverse
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from django.utils.translation import ugettext_lazy as _
from django_countries.fields import CountryField
from timezone_field import TimeZoneField
from django.db.models.signals import post_save
from django.dispatch import receiver


from seedorf.utils.models import BasePropertiesModel


def get_avatar_upload_directory(instance, filename):
    # TODO: Test for files names with non latin characters
    # TODO: Upload files to CDN
    return "users/{0}/avatars/{1}".format(instance.uuid, filename)


def max_value_year_of_birth(value):
    return MaxValueValidator(date.today().year)(value)


def min_value_year_of_birth(value):
    return MinValueValidator(date.today().year - 100)(value)


@python_2_unicode_compatible
class User(AbstractUser, BasePropertiesModel):

    name = models.CharField(
        blank=True,
        default="",
        max_length=255,
        null=False,
        verbose_name=_("Name of User"),
    )

    def __str__(self):
        return self.email

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"uuid": self.uuid})

    class Meta:
        ordering = ("-created_at",)


class UserProfile(BasePropertiesModel):

    GENDER_MALE = "MALE"
    GENDER_FEMALE = "FEMALE"
    GENDER_OTHER = "OTHER"
    GENDER_NOT_SPECIFIED = "NOT_SPECIFIED"

    GENDERS = (
        (GENDER_MALE, _("Male")),
        (GENDER_FEMALE, _("Female")),
        (GENDER_OTHER, _("Other")),
        (GENDER_NOT_SPECIFIED, _("Not Specified")),
    )

    user = models.OneToOneField(
        "users.User",
        blank=False,
        null=False,
        related_name="profile",
        verbose_name=_("Profile"),
    )

    sports = models.ManyToManyField(
        "sports.Sport",
        blank=True,
        related_name="followers",
        verbose_name=_("Favourite Sports"),
    )

    spots = models.ManyToManyField(
        "spots.Spot",
        blank=True,
        related_name="followers",
        verbose_name=_("Favourite Spots"),
    )

    gender = models.CharField(
        blank=False,
        choices=GENDERS,
        default=GENDER_NOT_SPECIFIED,
        max_length=25,
        null=False,
        verbose_name=_("Gender"),
    )

    year_of_birth = models.PositiveSmallIntegerField(
        blank=True,
        verbose_name=_("Year of Birth"),
        null=True,
        validators=[min_value_year_of_birth, max_value_year_of_birth],
    )

    avatar = models.ImageField(
        blank=True,
        null=True,
        upload_to=get_avatar_upload_directory,
        verbose_name=_("Avatar Image"),
    )

    language = models.CharField(
        blank=False,
        choices=settings.LANGUAGES,
        default="en",
        max_length=25,
        null=False,
        verbose_name=_("Languages"),
    )

    timezone = TimeZoneField(
        blank=False, default="Europe/Amsterdam", null=False, verbose_name=_("Timezone")
    )

    country = CountryField(blank=True, null=False, verbose_name=_("Country"))

    bio = models.TextField(blank=True, default="", null=False, verbose_name=_("Bio"))

    class Meta:
        ordering = ("-created_at",)

    def __str__(self):
        return self.user.email


#     # is_under_age
#     # company
#     # two_factor_authentication
#     # plan
#     # blocks
#     # emails
#     # followers


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

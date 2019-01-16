import urllib
from datetime import date

import uuid

import requests
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.core.mail import EmailMessage
from django.urls import reverse
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from django.utils.translation import ugettext_lazy as _
from django_countries.fields import CountryField
from timezone_field import TimeZoneField
from django.db.models.signals import post_save
from django.dispatch import receiver

from seedorf.utils.firebase import get_firebase_link
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

    def create_magic_link(self):
        try:
            # if there is a current active link, delete it
            self.magic_link.delete()
        except MagicLoginLink.DoesNotExist:
            pass
        magic_link = MagicLoginLink(user=self)
        magic_link.set_short_link()
        magic_link.save()
        magic_link.mail()
        return magic_link

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
        on_delete=models.CASCADE,
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



def random_string():
    return uuid.uuid4().hex


class MagicLoginLink(BasePropertiesModel):
    user = models.OneToOneField(
        "users.User",
        blank=False,
        null=False,
        on_delete=models.CASCADE,
        related_name="magic_link",
        verbose_name=_("Magic login link"),
    )

    token = models.CharField(
        blank=False,
        null=False,
        max_length=32,
        verbose_name=_("Token"),
        default=random_string
    )

    short_link = models.CharField(
        blank=False,
        null=False,
        max_length=50,
        verbose_name=_("Link")
    )

    def set_short_link(self):
        self.short_link = get_firebase_link('magic_link_login?token=' + self.token)

    def mail(self):
        ctx = {
            "product_name": "SportySpots",
            "product_url": "https://www.sportyspots.com",
            "support_email": "info@sportyspots.com",
            "sender_name": "SportySpots",
            "company_name": "SportySpots",
            "company_address": "Amsterdam, The Netherlands",
            "magic_link": str(self)
        }

        message = EmailMessage(subject=None, body=None, to=[self.user.email])
        message.template_id = 9746750
        message.merge_global_data = ctx
        message.send()

    def __str__(self):
        return self.short_link

import time
import uuid
from datetime import date

from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _
from django_countries.fields import CountryField
from rest_framework_jwt.settings import api_settings
from timezone_field import TimeZoneField

from seedorf.utils.email import send_mail
from seedorf.utils.firebase import get_firebase_link
from seedorf.utils.models import BasePropertiesModel


def get_avatar_upload_directory(instance, filename):
    # TODO: Test for files names with non latin characters
    return f"users/{instance.uuid}/avatars/{filename}"


def max_value_year_of_birth(value):
    return MaxValueValidator(date.today().year)(value)


def min_value_year_of_birth(value):
    return MinValueValidator(date.today().year - 100)(value)


class User(AbstractUser, BasePropertiesModel):

    name = models.CharField(blank=True, default="", max_length=255, null=False, verbose_name=_("Name of User"))

    def __str__(self):
        return f"{self.email}"

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"uuid": self.uuid})

    def create_magic_link(self):
        try:
            # if there is a current active link, delete it
            self.magic_link.delete()
        except MagicLoginLink.DoesNotExist:
            pass
        magic_link = MagicLoginLink(user=self)
        magic_link.create_token()
        magic_link.set_short_link()
        magic_link.save()
        return magic_link

    class Meta:
        ordering = ("-created_at",)

    @property
    def initials(self):
        return "".join(i[0] for i in self.name.split()).upper()[0:2]


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
        "sports.Sport", blank=True, related_name="followers", verbose_name=_("Favourite Sports")
    )

    spots = models.ManyToManyField(
        "spots.Spot", blank=True, related_name="followers", verbose_name=_("Favourite Spots")
    )

    gender = models.CharField(
        blank=False, choices=GENDERS, default=GENDER_NOT_SPECIFIED, max_length=25, null=False, verbose_name=_("Gender")
    )

    year_of_birth = models.PositiveSmallIntegerField(
        blank=True,
        verbose_name=_("Year of Birth"),
        null=True,
        validators=[min_value_year_of_birth, max_value_year_of_birth],
    )

    avatar = models.ImageField(
        blank=True, null=True, upload_to=get_avatar_upload_directory, verbose_name=_("Avatar Image")
    )

    language = models.CharField(
        blank=False, choices=settings.LANGUAGES, default="en", max_length=25, null=False, verbose_name=_("Languages")
    )

    timezone = TimeZoneField(blank=False, default="Europe/Amsterdam", null=False, verbose_name=_("Timezone"))

    country = CountryField(blank=True, null=False, verbose_name=_("Country"))

    bio = models.TextField(blank=True, default="", null=False, verbose_name=_("Bio"))

    class Meta:
        ordering = ("-created_at",)

    def __str__(self):
        return f"{self.user.email}"


#     # is_under_age
#     # company
#     # two_factor_authentication
#     # plan
#     # blocks
#     # emails
#     # followers


class MagicLoginLink(BasePropertiesModel):
    user = models.OneToOneField(
        "users.User",
        blank=False,
        null=False,
        on_delete=models.CASCADE,
        related_name="magic_link",
        verbose_name=_("Magic login link"),
    )

    token = models.TextField(blank=False, null=False, verbose_name=_("Token"), unique=True)

    short_link = models.CharField(blank=False, null=False, max_length=50, verbose_name=_("Link"))

    def create_token(self):
        jwt_payload = {"email": self.user.email, "name": self.user.name, "iat": int(time.time())}
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
        self.token = jwt_encode_handler(jwt_payload)

    def set_short_link(self):
        self.short_link = get_firebase_link(f"magic_link_login?token={self.token}")

    def mail(self):
        context = {"name": self.user.name, "action_url": str(self)}

        send_mail(
            to=self.user.email,
            template_prefix="MagicLoginLink",
            subject=_("Login"),
            language=self.user.profile.language,
            context=context,
        )

    def __str__(self):
        return f"{self.short_link}"

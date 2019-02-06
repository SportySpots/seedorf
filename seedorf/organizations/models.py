from django.conf import settings
from django.db import models
from django.utils.translation import ugettext_lazy as _

from seedorf.utils.models import BasePropertiesModel


class Organization(BasePropertiesModel):
    name = models.CharField(
        blank=False, max_length=255, null=False, verbose_name=_("Name")
    )
    homepage_url = models.URLField(
        blank=True,
        help_text=_("Where can we find out more about this organization ?"),
        max_length=500,
        null=False,
        verbose_name=_("Homepage URL"),
    )
    members = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        through="Membership",
        through_fields=("organization", settings.AUTH_USER_MODEL),
    )

    class Meta:
        ordering = ("-created_at",)


class Membership(models.Model):
    ROLE_OWNER = "owner"
    ROLE_MEMBER = "member"

    ROLES = ((ROLE_OWNER, _("Owner")), (ROLE_MEMBER, _("Member")))

    organization = models.ForeignKey(Organization, on_delete=models.CASCADE)
    member = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    role = models.CharField(
        choices=ROLES,
        default=ROLE_MEMBER,
        help_text=_("Persons role within the organization."),
        max_length=25,
        null=True,
    )

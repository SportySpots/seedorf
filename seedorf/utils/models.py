import uuid

from django.conf import settings
from django.db import models
from django.utils import timezone
from django.utils.translation import ugettext_lazy as _
from hashids import Hashids


class BasePropertiesModel(models.Model):
    uuid = models.UUIDField(
        blank=False, default=uuid.uuid4, editable=False, null=False, verbose_name=_("Unique Identifier")
    )
    created_at = models.DateTimeField(
        blank=False, default=timezone.now, editable=False, null=False, verbose_name=_("Created At")
    )
    modified_at = models.DateTimeField(
        auto_now=True, blank=False, editable=False, null=False, verbose_name=_("Modified At")
    )
    deleted_at = models.DateTimeField(blank=True, editable=False, null=True, verbose_name=_("Deleted At"))

    @property
    def hash_slug(self):
        hasher = Hashids(salt=settings.SECRET_KEY, min_length=6)
        return hasher.encode(self.id)

    @classmethod
    def reverse_hash_slug(cls, hash_slug):
        hasher = Hashids(salt=settings.SECRET_KEY, min_length=6)
        return hasher.decode(hash_slug)

    class Meta:
        abstract = True

from django.db import models
from django.utils.translation import ugettext_lazy as _
import uuid
from django.utils import timezone


class CommonPropertiesModel(models.Model):
    uuid = models.UUIDField(
        blank=False,
        default=uuid.uuid4,
        editable=False,
        null=False,
        verbose_name=_('Unique Identifier')
    )
    created_at = models.DateTimeField(
        blank=False,
        default=timezone.now,
        editable=False,
        null=False,
        verbose_name=_('Created At')
    )
    modified_at = models.DateTimeField(
        auto_now=True,
        blank=False,
        editable=False,
        null=False,
        verbose_name=_('Modified At')
    )
    deleted_at = models.DateTimeField(
        blank=True,
        editable=False,
        null=True,
        verbose_name=_('Deleted At')
    )

    class Meta:
        abstract = True

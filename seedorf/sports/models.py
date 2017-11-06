from django.contrib.contenttypes.fields import GenericRelation
from django.db import models
from django.utils.translation import ugettext_lazy as _
from nece.models import TranslationModel

from seedorf.utils.models import BasePropertiesModel


class Sport(BasePropertiesModel, TranslationModel):
    # Predefined Values
    BASKETBALL = 'basketball'
    BEACH_VOLLEYBALL = 'beach_volleyball'
    BOOTCAMP = 'bootcamp'
    BOULES = 'boules'
    FITNESS = 'fitness'
    OTHERS = 'others'
    SKATING = 'skating'
    SOCCER = 'soccer'
    TENNIS = 'tennis'

    SPORTS = (
        (BASKETBALL, _('Basketball')),
        (BEACH_VOLLEYBALL, _('Beach Volleyball')),
        (BOOTCAMP, _('Bootcamp')),
        (BOULES, _('Boules')),
        (FITNESS, _('Fitness')),
        (OTHERS, _('Others')),
        (SKATING, _('Skating')),
        (SOCCER, _('Soccer')),
        (TENNIS, _('Tennis')),
    )

    # Instance Fields
    category = models.CharField(
        blank=False,
        choices=SPORTS,
        default=OTHERS,
        max_length=50,
        null=False,
    )
    name = models.CharField(
        blank=False,
        help_text=_('Name of the sub category of the sport (e.g. Soccer 5x5).'),
        max_length=255,
        null=False,
        unique=True,
        verbose_name=_('Sport Name')
    )
    description = models.TextField(
        blank=True,
        default='',
        max_length=4096,
        null=False,
        verbose_name=_('Sport Description'),
    )

    # Generic Relations
    reaction = GenericRelation(
        'reactions.Reaction',
        blank=True,
        null=True,
        related_query_name='sport_reactions',
    )

    class Meta:
        verbose_name = _('Sport')
        verbose_name_plural = _('Sports')
        ordering = ('category', 'name')
        translatable_fields = ('name', 'description')

    def __str__(self):
        return self.name

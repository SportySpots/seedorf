from django.db import models
from django.utils.translation import ugettext_lazy as _
from seedorf.utils.mixins import CommonModelPropertiesMixin
from django.contrib.contenttypes.fields import GenericRelation


class Sport(CommonModelPropertiesMixin):
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
    code = models.CharField(
        blank=False,
        choices=SPORTS,
        default=OTHERS,
        max_length=50,
        null=False,
        unique=True,
    )
    name = models.CharField(
        blank=False,
        null=False,
        max_length=255,
        unique=True,
    )
    reaction = GenericRelation(
        'reactions.Reaction',
        related_query_name='sport_reactions',
    )

    class Meta:
        verbose_name = _('Sport')
        verbose_name_plural = _('Sports')

    def __str__(self):
        return self.name

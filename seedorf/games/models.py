import pytz
from django.conf import settings
from django.db import models
from django.utils.translation import ugettext_lazy as _

from seedorf.utils.mixins import CommonModelPropertiesMixin


class Game(CommonModelPropertiesMixin):
    # TODO: Translations of the timezones
    TIMEZONES = [(pytz.timezone(tz), tz) for tz in pytz.common_timezones]

    organizer = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='game_organizers',
        verbose_name=_('Organizer')
    )
    # TODO: Evaluate if start_time / end_time could be replaced by DateTimeRangeField
    # REF: https://docs.djangoproject.com/en/1.11/ref/contrib/postgres/fields/#datetimerangefield
    start_time = models.DateTimeField(
        blank=False,
        null=False
    )
    # TODO: Validate that the end time is max X hours from the start time
    end_time = models.DateTimeField(
        blank=False,
        null=False
    )
    start_timezone = models.CharField(
        blank=False,
        choices=TIMEZONES,
        default=pytz.UTC,
        max_length=50,
        null=False
    )
    end_timezone = models.CharField(
        blank=False,
        choices=TIMEZONES,
        default=pytz.UTC,
        max_length=50,
        null=False
    )
    sport = models.ForeignKey(
        'sports.Sport',
        on_delete=models.CASCADE,
        related_name='sport_games'
    )
    spot = models.ForeignKey(
        'spots.Spot',
        on_delete=models.CASCADE,
        related_name='spot_games'
    )
    is_invite_only = models.BooleanField(
        blank=False,
        default=False,
        null=False
    )


class RSVPStatus(CommonModelPropertiesMixin):
    ATTENDING = 'attending'
    DECLINED = 'declined'
    INTERESTED = 'interested'
    INVITED = 'invited'
    MAYBE = 'maybe'

    STATUS = (
        (ATTENDING, _('Attending')),
        (DECLINED, _('Declined')),
        (INTERESTED, _('Interested')),
        (INVITED, _('Invited')),
        (MAYBE, _('Maybe')),
    )
    status = models.CharField(
        choices=STATUS,
        default=None,
        max_length=25,
        null=True,
        verbose_name=_('RSVP Status'),
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='rsvp_statuses',
        verbose_name=_('Player'),
    )
    game = models.ForeignKey(
        'games.Game',
        on_delete=models.CASCADE,
        related_name='attendees',
        verbose_name=_('Game')
    )

import pytz
from django.conf import settings
from django.core.validators import MinValueValidator
from django.db import models
from django.utils.translation import ugettext as _

from seedorf.utils.models import BasePropertiesModel


class Game(BasePropertiesModel):
    """
    TODO: Validation

    No game can be created on non-verified spots
    No game can be created outside of the establishment date and closure date of a temporary spot
    No game can be created on permanently closed spots
    """

    # Predefined Values
    STATUS_CANCELED = 'canceled'  # When the organizer cancels the event
    STATUS_COMPLETED = 'completed'  # When the organizer confirms the game took place
    STATUS_ENDED = 'ended'  # When the system sets the state automatically based on end time
    STATUS_LIVE = 'live'  # When the organizer confirms the game is live
    STATUS_PLANNED = 'planned'  # When the game is in planning phase
    STATUS_STARTED = 'started'  # When the system sets the state automatically based on start time

    STATUSES = (
        (STATUS_CANCELED, _('Canceled')),
        (STATUS_COMPLETED, _('Completed')),
        (STATUS_ENDED, _('Ended')),
        (STATUS_LIVE, _('Live')),
        (STATUS_PLANNED, _('Planned')),
        (STATUS_STARTED, _('Started')),
    )

    INVITE_MODE_APPROVAL = 'approval'
    INVITE_MODE_INVITE_ONLY = 'invite_only'
    INVITE_MODE_OPEN = 'open'

    INVITE_MODES = (
        (INVITE_MODE_APPROVAL, _('Approval')),
        (INVITE_MODE_INVITE_ONLY, _('Invite Only')),
        (INVITE_MODE_OPEN, _('Open')),
    )

    # TODO: Translations of the timezones
    TIMEZONES = [(tz, _(tz)) for tz in pytz.common_timezones]

    # Foreign Keys
    organizer = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='game_organizers',
        verbose_name=_('Organizer'),
    )
    sport = models.ForeignKey(
        'sports.Sport',
        on_delete=models.CASCADE,
        related_name='sport_games',
        verbose_name=_('Sport'),
        null=True
    )
    spot = models.ForeignKey(
        'spots.Spot',
        on_delete=models.CASCADE,
        related_name='spot_games',
        verbose_name=_('Spot'),
        null=True
    )

    # Instance Fields
    # TODO: Maybe auto generate the game name based on the organizer, e.g. Soccer with Sam at Oosterpark
    name = models.CharField(
        blank=True,
        max_length=255,
        null=False,
    )

    description = models.TextField(
        blank=True,
        help_text=_('Description of the game.'),
        null=False,
        verbose_name=_('Description')
    )

    # TODO: Evaluate if start_time / end_time could be replaced by DateTimeRangeField
    # REF: https://docs.djangoproject.com/en/1.11/ref/contrib/postgres/fields/#datetimerangefield
    start_time = models.DateTimeField(
        blank=True,
        help_text=_('Start time of the game in UTC.'),
        null=True,
        verbose_name=_('Start Time (UTC)')
    )
    # TODO: Validate that the end time is max X hours from the start time
    end_time = models.DateTimeField(
        blank=True,
        help_text=_('End time of the game in UTC.'),
        null=True,
        verbose_name=_('End Time (UTC)'),
    )
    # TODO: Validate that the rsvp open time is before the start time and the rsvp close time
    rsvp_open_time = models.DateTimeField(
        blank=True,
        help_text=_('UTC time before that RSVPs will no longer be accepted, though organizers may close RSVPs earlier'),
        null=True,
        verbose_name=_('RSVP Open Time (UTC)'),
    )
    # TODO: Validate that the rsvp close time is before the start time
    # TODO: Set the RSVP close time to the start time automatically
    rsvp_close_time = models.DateTimeField(
        blank=True,
        help_text=_('UTC time after that RSVPs will no longer be accepted, though organizers may close RSVPs earlier'),
        null=True,
        verbose_name=_('RSVP Close Time (UTC)'),
    )
    rsvp_closed = models.BooleanField(
        blank=False,
        default=False,
        help_text=_('Is RSVPing explicitly closed for the game.'),
        null=False,
        verbose_name=_('RSVP Closed'),
    )
    start_timezone = models.CharField(
        blank=False,
        choices=TIMEZONES,
        default=pytz.UTC.zone,
        help_text=_('Timezone of the start time of the game.'),
        max_length=50,
        null=False,
        verbose_name=_('Start Time Timezone'),
    )
    end_timezone = models.CharField(
        blank=False,
        choices=TIMEZONES,
        default=pytz.UTC.zone,
        help_text=_('Timezone of the end time of the game.'),
        max_length=50,
        null=False,
        verbose_name=_('End Time Timezone'),
    )
    invite_mode = models.CharField(
        blank=False,
        choices=INVITE_MODES,
        default=INVITE_MODE_OPEN,
        help_text=_('If the game is open for everyone to join or based on organizers approval or is invite only.'),
        max_length=25,
        null=False,
        verbose_name=_('Invite Mode'),
    )
    status = models.CharField(
        blank=False,
        choices=STATUSES,
        default=STATUS_PLANNED,
        max_length=25,
        null=False,
        verbose_name=_('Status'),
    )
    capacity = models.PositiveSmallIntegerField(
        blank=True,
        null=True,
        validators=[MinValueValidator(limit_value=2)],
        verbose_name=_('Capacity'),
    )
    show_remaining = models.BooleanField(
        blank=False,
        default=True,
        help_text=_('If the game page should show the number of open player spots left.'),
        null=False,
        verbose_name=_('Show Remaining Player Required Spots'),
    )
    is_listed = models.BooleanField(
        blank=False,
        default=True,
        help_text=_('If this game is publicly searchable on SportySpots.'),
        null=False,
        verbose_name=_('Is Listed?'),
    )
    is_shareable = models.BooleanField(
        blank=False,
        default=True,
        help_text=_('If this game shows social sharing buttons.'),
        null=False,
        verbose_name=_('Is Shareable?'),
    )
    is_featured = models.BooleanField(
        blank=False,
        default=False,
        help_text=_('If this game is featured.'),
        null=False,
        verbose_name=_('Is Featured?'),
    )

    class Meta:
        verbose_name = _('Game')
        verbose_name_plural = _('Games')
        ordering = ('-created_at',)

    def __str__(self):
        return self.name


class RsvpStatus(BasePropertiesModel):
    """
    TODO:
    Define State Machine to handle RSVP Status Transitions
    """
    # Predefined Values
    UNKNOWN = 'unknown'
    ACCEPTED = 'accepted'  # When the game is approval based
    ATTENDING = 'attending'
    CHECKED_IN = 'checked_in'
    DECLINED = 'declined'
    INTERESTED = 'interested'
    INVITED = 'invited'

    STATUS = (
        (UNKNOWN, _('Unknown')),
        (ACCEPTED, _('Accepted')),
        (ATTENDING, _('Attending')),
        (CHECKED_IN, _('Checked In')),
        (DECLINED, _('Declined')),
        (INTERESTED, _('Interested')),
        (INVITED, _('Invited')),
    )

    # Foreign Keys
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        blank=False,
        null=False,
        on_delete=models.CASCADE,
        related_name='rsvp_statuses',
        verbose_name=_('Player'),
    )
    game = models.ForeignKey(
        'games.Game',
        blank=False,
        null=False,
        on_delete=models.CASCADE,
        related_name='attendees',
        verbose_name=_('Game'),
    )
    # Instance Fields
    status = models.CharField(
        blank=False,
        choices=STATUS,
        default=UNKNOWN,
        max_length=25,
        null=True,
        verbose_name=_('Status'),
    )

    class Meta:
        verbose_name = _('RSVP Status')
        verbose_name_plural = _('RSVP Statuses')
        ordering = ('-created_at',)
        # TODO: should we track the whole RSVP historic/audit log changes per user in the same table or
        # in a different table
        unique_together = (('user', 'game'),)

    def __str__(self):
        return '{} : {}'.format(self.game.name, self.user.name)

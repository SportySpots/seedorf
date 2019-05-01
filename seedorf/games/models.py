import pytz
from django.conf import settings
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext as _
from django_fsm import FSMField, transition
from django.utils import timezone

from seedorf.utils.email import send_mail
from seedorf.utils.firebase import get_firebase_link
from seedorf.utils.models import BasePropertiesModel


class Game(BasePropertiesModel):
    """
    TODO: Validation

    No game can be created on non-verified spots
    No game can be created outside of the establishment date and closure date of a temporary spot
    No game can be created on permanently closed spots

    TODO: Add language to game
    """

    # Predefined Values
    # When the organizer cancels the event
    STATUS_CANCELED = "canceled"
    # When the organizer confirms the game took place
    STATUS_COMPLETED = "completed"
    # When the game is in the planning phase / draft
    STATUS_DRAFT = "draft"
    # When the system sets the state automatically based on end time
    STATUS_ENDED = "ended"
    # When the organizer confirms manually the game is live
    STATUS_LIVE = "live"
    # When the game is planned
    STATUS_PLANNED = "planned"
    # When a planned game is updated
    STATUS_UPDATED = "updated"
    # When the system sets the state automatically based on start time
    STATUS_STARTED = "started"

    STATUSES = (
        (STATUS_CANCELED, _("Canceled")),
        (STATUS_COMPLETED, _("Completed")),
        (STATUS_DRAFT, _("Draft")),
        (STATUS_ENDED, _("Ended")),
        (STATUS_LIVE, _("Live")),
        (STATUS_PLANNED, _("Planned")),
        (STATUS_UPDATED, _("Updated")),
        (STATUS_STARTED, _("Started")),
    )

    INVITE_MODE_APPROVAL = "approval"
    INVITE_MODE_INVITE_ONLY = "invite_only"
    INVITE_MODE_OPEN = "open"

    INVITE_MODES = (
        (INVITE_MODE_APPROVAL, _("Approval")),
        (INVITE_MODE_INVITE_ONLY, _("Invite Only")),
        (INVITE_MODE_OPEN, _("Open")),
    )

    # TODO: Translations of the timezones
    TIMEZONES = [(tz, _(tz)) for tz in pytz.common_timezones]

    # Foreign Keys
    organizer = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="game_organizers", verbose_name=_("Organizer")
    )
    sport = models.ForeignKey(
        "sports.Sport", on_delete=models.CASCADE, related_name="sport_games", verbose_name=_("Sport"), null=True
    )
    spot = models.ForeignKey(
        "spots.Spot", on_delete=models.CASCADE, related_name="spot_games", verbose_name=_("Spot"), null=True
    )

    # Instance Fields
    # TODO: Maybe auto generate the game name based on the organizer, e.g. Soccer with Sam at Oosterpark
    name = models.CharField(blank=True, default="", max_length=255, null=False)

    description = models.TextField(
        blank=True, default="", help_text=_("Description of the game."), null=False, verbose_name=_("Description")
    )

    # TODO: Evaluate if start_time / end_time could be replaced by DateTimeRangeField
    # REF: https://docs.djangoproject.com/en/1.11/ref/contrib/postgres/fields/#datetimerangefield
    start_time = models.DateTimeField(
        blank=False, help_text=_("Start time of the game in UTC."), null=False, verbose_name=_("Start Time (UTC)")
    )
    end_time = models.DateTimeField(
        blank=False, help_text=_("End time of the game in UTC."), null=False, verbose_name=_("End Time (UTC)")
    )

    rsvp_open_time = models.DateTimeField(
        blank=True,
        help_text=_("UTC time before that RSVPs will no longer be accepted, though organizers may close RSVPs earlier"),
        null=True,
        verbose_name=_("RSVP Open Time (UTC)"),
    )

    rsvp_close_time = models.DateTimeField(
        blank=True,
        help_text=_("UTC time after that RSVPs will no longer be accepted, though organizers may close RSVPs earlier"),
        null=True,
        verbose_name=_("RSVP Close Time (UTC)"),
    )

    rsvp_closed = models.BooleanField(
        blank=False,
        default=False,
        help_text=_("Is RSVPing explicitly closed for the game."),
        null=False,
        verbose_name=_("RSVP Closed"),
    )

    start_timezone = models.CharField(
        blank=False,
        choices=TIMEZONES,
        default=pytz.UTC.zone,
        help_text=_("Timezone of the start time of the game."),
        max_length=50,
        null=False,
        verbose_name=_("Start Time Timezone"),
    )
    end_timezone = models.CharField(
        blank=False,
        choices=TIMEZONES,
        default=pytz.UTC.zone,
        help_text=_("Timezone of the end time of the game."),
        max_length=50,
        null=False,
        verbose_name=_("End Time Timezone"),
    )
    invite_mode = models.CharField(
        blank=False,
        choices=INVITE_MODES,
        default=INVITE_MODE_OPEN,
        help_text=_("If the game is open for everyone to join or based on organizers approval or is invite only."),
        max_length=25,
        null=False,
        verbose_name=_("Invite Mode"),
    )
    status = FSMField(
        blank=False,
        choices=STATUSES,
        default=STATUS_DRAFT,
        max_length=25,
        null=False,
        protected=False,
        verbose_name=_("Status"),
    )
    capacity = models.PositiveSmallIntegerField(
        blank=True,
        null=True,
        validators=[MinValueValidator(limit_value=2), MaxValueValidator(limit_value=50)],
        verbose_name=_("Capacity"),
    )
    show_remaining = models.BooleanField(
        blank=False,
        default=True,
        help_text=_("If the game page should show the number of open player spots left."),
        null=False,
        verbose_name=_("Show Remaining Player Required Spots"),
    )
    is_listed = models.BooleanField(
        blank=False,
        default=True,
        help_text=_("If this game is publicly searchable on SportySpots."),
        null=False,
        verbose_name=_("Is Listed?"),
    )
    is_shareable = models.BooleanField(
        blank=False,
        default=True,
        help_text=_("If this game shows social sharing buttons."),
        null=False,
        verbose_name=_("Is Shareable?"),
    )
    is_featured = models.BooleanField(
        blank=False, default=False, help_text=_("If this game is featured."), null=False, verbose_name=_("Is featured?")
    )
    share_link = models.URLField(
        blank=False,
        null=False,
        help_text=_("Shareable link (app/web) to this game."),
        max_length=80,
        verbose_name=_("Shareable link"),
    )
    class Meta:
        verbose_name = _("Game")
        verbose_name_plural = _("Games")
        ordering = ("start_time",)

    def __str__(self):
        return f"{self.name}"

    @property
    def started(self):
        now = timezone.now()
        return now > self.start_time

    @property
    def ended(self):
        now = timezone.now()
        return now > self.end_time

    @property
    def required_players(self):
        rsvp_attendees = self.attendees.filter(status=RsvpStatus.STATUS_ATTENDING).count()
        if self.capacity:
            return self.capacity - rsvp_attendees
        return None

    def get_absolute_url(self):
        return reverse("game-detail", args=[str(self.uuid)])

    def create_share_link(self):
        try:
            image_url = self.spot.images.first().image.url
        except AttributeError:
            image_url = settings.STATIC_URL+'images/sportyspots-logo.png'

        web_game_url = reverse('web-game-detail', kwargs={'uuid': self.uuid})

        return get_firebase_link(
            f"games/{self.uuid}",
            unguessable=False,
            st=self.name,
            sd=self.description,
            si=image_url,
            ofl=web_game_url,
            afl=web_game_url,
            ifl=web_game_url,
        )

    def send_organizer_confirmation_mail(self):
        context = {
            "name": self.organizer.name,
            # TODO: Fix game url hardcoding
            "action_url": "https://www.sportyspots.com/games/{}".format(self.uuid),
        }

        send_mail(
            self.organizer.email,
            template_prefix="CreateActivityConfirmation",
            subject=_("Your activity details"),
            language=self.organizer.profile.language,
            context=context,
        )

    def send_attendees_update_email(self, message):
        pass

    def send_attendees_cancellation_email(self):
        # TODO: Abstract email sending so that default fields are added
        attendees = [
            rsvp_status.user for rsvp_status in RsvpStatus.objects.filter(game=self, status=RsvpStatus.STATUS_ATTENDING)
        ]
        if len(attendees) > 0:
            for attendee in attendees:
                context = {
                    "name": attendee.name,
                    "invite_sender_name": self.organizer.name,
                    # TODO: Fix game url hardcoding
                    "action_url": f"https://www.sportyspots.com/games/{self.uuid}",
                }

                send_mail(
                    to=attendee.email,
                    template_prefix="CancelledGame",
                    subject=_(f"Sport activity has been cancelled."),
                    language=attendee.profile.language,
                    context=context,
                )

    def transition_status(self, status):
        if status == Game.STATUS_CANCELED:
            self.transition_status_canceled()
        elif status == Game.STATUS_COMPLETED:
            self.transition_status_completed()
        elif status == Game.STATUS_ENDED:
            self.transition_status_ended()
        elif status == Game.STATUS_LIVE:
            self.transition_status_live()
        elif status == Game.STATUS_PLANNED:
            self.transition_status_planned()
        elif status == Game.STATUS_UPDATED:
            self.transition_status_updated()
        elif status == Game.STATUS_STARTED:
            self.transition_status_started()

    @transition(
        field=status,
        source=[STATUS_DRAFT, STATUS_UPDATED],
        target=STATUS_PLANNED,
        permission=lambda instance, user: instance.organizer.uuid == user.uuid,
    )
    def transition_status_planned(self):
        self.send_organizer_confirmation_mail()

    @transition(
        field=status,
        source=STATUS_PLANNED,
        target=STATUS_UPDATED,
        permission=lambda instance, user: instance.organizer.uuid == user.uuid,
    )
    def transition_status_updated(self):
        self.send_attendees_update_email()

    @transition(
        field=status,
        source=STATUS_PLANNED,
        target=STATUS_STARTED,
        permission=lambda instance, user: instance.organizer.uuid == user.uuid,
    )
    def transition_status_started(self):
        pass

    @transition(
        field=status,
        source=[STATUS_PLANNED, STATUS_STARTED],
        target=STATUS_LIVE,
        permission=lambda instance, user: instance.organizer.uuid == user.uuid,
    )
    def transition_status_live(self):
        pass

    @transition(
        field=status,
        source=[STATUS_LIVE, STATUS_STARTED],
        target=STATUS_UPDATED,
        permission=lambda instance, user: instance.organizer.uuid == user.uuid,
    )
    def transition_status_ended(self):
        pass

    @transition(
        field=status,
        source=[STATUS_STARTED, STATUS_LIVE, STATUS_ENDED],
        target=STATUS_COMPLETED,
        permission=lambda instance, user: instance.organizer.uuid == user.uuid,
    )
    def transition_status_completed(self):
        pass

    @transition(
        field=status,
        source=[STATUS_DRAFT, STATUS_PLANNED, STATUS_STARTED, STATUS_LIVE],
        target=STATUS_CANCELED,
        permission=lambda instance, user: instance.organizer.uuid == user.uuid,
    )
    def transition_status_canceled(self):
        self.send_attendees_cancellation_email()


class RsvpStatus(BasePropertiesModel):
    """
    TODO:
    Define State Machine to handle RSVP Status Transitions
    """

    # Predefined Values
    # When the user is invited, and he/she accepts.
    STATUS_ACCEPTED = "accepted"
    # When the user signs up for an open event
    STATUS_ATTENDING = "attending"
    STATUS_CHECKED_IN = "checked_in"
    STATUS_DECLINED = "declined"
    STATUS_INTERESTED = "interested"
    STATUS_INVITED = "invited"
    STATUS_UNKNOWN = "unknown"

    STATUS = (
        (STATUS_ACCEPTED, _("Accepted")),
        (STATUS_ATTENDING, _("Attending")),
        (STATUS_CHECKED_IN, _("Checked In")),
        (STATUS_DECLINED, _("Declined")),
        (STATUS_INTERESTED, _("Interested")),
        (STATUS_INVITED, _("Invited")),
        (STATUS_UNKNOWN, _("Unknown")),
    )

    # Foreign Keys
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        blank=False,
        null=False,
        on_delete=models.CASCADE,
        related_name="rsvp_statuses",
        verbose_name=_("Player"),
    )
    game = models.ForeignKey(
        "games.Game",
        blank=False,
        null=False,
        on_delete=models.CASCADE,
        related_name="attendees",
        verbose_name=_("Game"),
    )
    # Instance Fields
    status = FSMField(
        blank=False,
        choices=STATUS,
        default=STATUS_UNKNOWN,
        max_length=25,
        null=True,
        protected=False,
        verbose_name=_("Status"),
    )

    class Meta:
        verbose_name = _("RSVP Status")
        verbose_name_plural = _("RSVP Statuses")
        ordering = ("-created_at",)
        # TODO: should we track the whole RSVP historic/audit log changes per user in the same table or
        # in a different table
        unique_together = (("user", "game"),)

    def __str__(self):
        return f"{self.game.name} : { self.user.name}"

    def send_user_confirmation_mail(self):
        # TODO: Send the game details e.g. time, name, type of sport
        # TODO: Create ICS file for calendar
        context = {
            "invite_sender_name": self.game.organizer.name,
            "name": self.user.name,
            # TODO: Fix game url hardcoding
            "action_url": f"https://www.sportyspots.com/games/{self.game.uuid}",
        }

        send_mail(
            to=self.user.email,
            template_prefix="ConfirmationAttendance",
            subject=_("Game on! You're attending!"),
            language=self.user.profile.language,
            context=context,
        )

    def transition_status(self, status: str):
        if status == self.STATUS_ACCEPTED:
            self.accept()
        elif status == self.STATUS_ATTENDING:
            self.attend()
        elif status == self.STATUS_CHECKED_IN:
            self.check_in()
        elif status == self.STATUS_DECLINED:
            self.decline()
        elif status == self.STATUS_INTERESTED:
            self.interested()
        elif status == self.STATUS_INVITED:
            self.invite()
        elif status == self.STATUS_UNKNOWN:
            pass

    @transition(
        field=status,
        source=[STATUS_UNKNOWN, STATUS_INVITED, STATUS_INTERESTED],
        target=STATUS_ACCEPTED,
        permission=lambda instance, user: instance.user.uuid == user.uuid,
    )
    def accept(self):
        # TODO: Send the organizer a confirmation email
        # TODO: Send the user a confirmation email
        pass

    @transition(
        field=status,
        source=[STATUS_UNKNOWN, STATUS_DECLINED],
        target=STATUS_ATTENDING,
        permission=lambda instance, user: instance.user.uuid == user.uuid,
    )
    def attend(self):
        # TODO: Send a confirmation email to the user
        # TODO: Send a confirmation emeail to organizer
        self.send_user_confirmation_mail()

    @transition(
        field=status,
        source=STATUS_ATTENDING,
        target=STATUS_CHECKED_IN,
        permission=lambda instance, user: instance.user.uuid == user.uuid,
    )
    def check_in(self):
        pass

    @transition(
        field=status,
        source=[STATUS_UNKNOWN, STATUS_INVITED, STATUS_ACCEPTED, STATUS_INTERESTED, STATUS_ATTENDING],
        target=STATUS_DECLINED,
        permission=lambda instance, user: instance.user.uuid == user.uuid,
    )
    def decline(self):
        # TODO: Send the organizer an email, if he had invited the user
        self.send_user_confirmation_mail()

    @transition(
        field=status,
        source=STATUS_UNKNOWN,
        target=STATUS_INTERESTED,
        permission=lambda instance, user: instance.user.uuid == user.uuid,
    )
    def interested(self):
        pass

    @transition(
        field=status,
        source=STATUS_UNKNOWN,
        target=STATUS_INVITED,
        permission=lambda instance, user: instance.user.uuid == user.uuid,
    )
    def invite(self):
        # TODO: Send the invitee an email, notification
        pass

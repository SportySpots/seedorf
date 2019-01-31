from datetime import datetime, timedelta

import pendulum
from django.utils import timezone
from django.utils.translation import ugettext_lazy as _
from rest_framework import serializers

from django_fsm import TransitionNotAllowed

from seedorf.sports.models import Sport
from seedorf.spots.models import Spot
from seedorf.users.serializers import UserSerializer
from .models import Game, RsvpStatus


class RsvpStatusNestedSerializer(serializers.ModelSerializer):
    # NOTE: User is readonly as it is get/set direct from the request
    # TODO: Only the logged in user can create an rsvp for himself/ herself
    # TODO: Check if the game is invite only and see if the user was invited
    # TODO: Check if the game max users count has been reached.
    user = UserSerializer(read_only=True, many=False, required=False)

    class Meta:
        model = RsvpStatus
        fields = ("uuid", "status", "user", "created_at", "modified_at")
        read_only_fields = ("uuid", "user", "created_at", "modified_at")

    def validate_status(self, status: str) -> str:
        if not self.instance:
            if status not in [
                RsvpStatus.STATUS_ACCEPTED,
                RsvpStatus.STATUS_ATTENDING,
                RsvpStatus.STATUS_DECLINED,
                RsvpStatus.STATUS_INTERESTED,
            ]:
                raise serializers.ValidationError(
                    _(
                        "Only Accepted, Attending, Declined and Interested statuses are allowed while creating RSVP"
                    )
                )
        return status

    def create(self, validated_data):
        if self.context["view"].basename == "game-rsvps":
            game_uuid = self.context["view"].kwargs["game_uuid"]
            game = Game.objects.get(uuid=game_uuid)
            user = self.context["request"].user

            status = validated_data["status"]

            rsvp = RsvpStatus.objects.create(game=game, user=user)
            rsvp.transition_status(status)
            rsvp.save()

            return rsvp

        return {}

    def update(self, instance, validated_data):
        if self.context["view"].basename == "game-rsvps":
            game_uuid = self.context["view"].kwargs["game_uuid"]
            game = Game.objects.get(uuid=game_uuid)
            user = self.context["request"].user
            status = validated_data["status"]

            try:
                rsvp = RsvpStatus.objects.get(
                    game__uuid=game_uuid, user__uuid=user.uuid
                )
            except RsvpStatus.DoesNotExist:
                raise serializers.ValidationError(_("Invalid game."))

            if rsvp.user.uuid != user.uuid:
                raise serializers.ValidationError(_("Invalid user."))

            try:
                rsvp.transition_status(status)
            except TransitionNotAllowed:
                raise serializers.ValidationError(_("State transition not allowed"))

            rsvp.save()

            return rsvp


class GameSportNestedSerializer(serializers.ModelSerializer):
    uuid = serializers.UUIDField(required=True)

    class Meta:
        model = Sport
        fields = (
            "uuid",
            "category",
            "name",
            "description",
            "created_at",
            "modified_at",
        )
        read_only_fields = (
            "category",
            "name",
            "description",
            "created_at",
            "modified_at",
        )

    def create(self, validated_data):
        if self.context["view"].basename == "game-sport":
            game_uuid = self.context["view"].kwargs["game_uuid"]
            game = Game.objects.get(uuid=game_uuid)

            sport_uuid = validated_data["uuid"]
            try:
                sport = Sport.objects.get(uuid=str(sport_uuid))
            except Sport.DoesNotExist:
                raise serializers.ValidationError(_("Sport not found"))

            # if the game already has a spot assigned, then check if the sport being assigned belongs to the spot
            if game.spot:
                spot = Spot.objects.filter(sports__uuid=sport_uuid).first()
                if not spot or game.spot.uuid != spot.uuid:
                    raise serializers.ValidationError(
                        _(
                            "Invalid Sport. Sport being assigned is not associated with the game spot"
                        )
                    )

            game.sport = sport
            game.save()

            return sport

        return {}


class GameSpotNestedSerializer(serializers.ModelSerializer):
    uuid = serializers.UUIDField(required=True)

    class Meta:
        model = Spot
        fields = (
            "uuid",
            "name",
            "owner",
            "logo",
            "homepage_url",
            "is_verified",
            "is_permanently_closed",
            "is_temporary",
            "establishment_date",
            "closure_date",
            "address",
            "created_at",
            "modified_at",
        )
        read_only_fields = (
            "name",
            "owner",
            "logo",
            "homepage_url",
            "is_verified",
            "is_permanently_closed",
            "is_temporary",
            "establishment_date",
            "closure_date",
            "address",
            "created_at",
            "modified_at",
        )

    def create(self, validated_data):
        if self.context["view"].basename == "game-spot":
            game_uuid = self.context["view"].kwargs["game_uuid"]
            game = Game.objects.get(uuid=game_uuid)

            spot_uuid = validated_data["uuid"]
            try:
                spot = Spot.objects.get(uuid=str(spot_uuid))
            except Spot.DoesNotExist:
                raise serializers.ValidationError(_("Spot not found."))

            # if the game already has a spot assigned, then check if the sport being assinged belongs to the spot
            if game.sport:
                sport = Sport.objects.filter(spots__uuid=spot_uuid).first()
                if not sport or game.sport.uuid != sport.uuid:
                    raise serializers.ValidationError(
                        _(
                            "Invalid Spot. Spot being assigned doesnt have the already "
                            "associated sport"
                        )
                    )

            game.spot = spot
            game.save()

            return spot

        return {}


class GameSerializer(serializers.ModelSerializer):
    organizer = UserSerializer(read_only=True, many=False)
    sport = GameSportNestedSerializer(read_only=True, many=False)
    spot = GameSpotNestedSerializer(read_only=True, many=False)
    rsvps = RsvpStatusNestedSerializer(source="attendees", read_only=True, many=True)

    class Meta:
        model = Game
        fields = (
            "uuid",
            "name",
            "description",
            "start_time",
            "start_timezone",
            "end_time",
            "end_timezone",
            "rsvp_open_time",
            "rsvp_close_time",
            "rsvp_closed",
            "invite_mode",
            "status",
            "capacity",
            "show_remaining",
            "is_listed",
            "is_shareable",
            "is_featured",
            "created_at",
            "modified_at",
            "organizer",
            "sport",
            "spot",
            "rsvps",
        )
        read_only_fields = ("uuid", "created_at", "modified_at")

    @staticmethod
    def validate_start_time(start_time: datetime) -> datetime:
        now = timezone.now()

        if start_time < now:
            raise serializers.ValidationError(_("Start time cannot be in the past"))

        if start_time < now + timedelta(minutes=15):
            raise serializers.ValidationError(
                _("Start time should be atleast 15 minutes from now")
            )

        return start_time

    @staticmethod
    def validate_end_time(end_time: datetime) -> datetime:
        now = timezone.now()

        if end_time < now:
            raise serializers.ValidationError(_("End time cannot be in the past"))

        return end_time

    @staticmethod
    def validate_rsvp_open_time(rsvp_open_time: datetime) -> datetime:
        # now = timezone.now()

        # if rsvp_open_time < now:
        #     raise serializers.ValidationError(_("RSVP open time cannot be in the past"))

        return rsvp_open_time

    @staticmethod
    def validate_rsvp_close_time(rsvp_close_time: datetime) -> datetime:
        now = timezone.now()

        if rsvp_close_time < now:
            raise serializers.ValidationError(
                _("RSVP close time cannot be in the past")
            )

        return rsvp_close_time

    def validate_rsvp_closed(self, rsvp_closed: datetime) -> datetime:
        # Validation conditions while creating a game
        if not self.instance:
            if rsvp_closed:
                raise serializers.ValidationError(
                    _("RSVP closed cannot be set while creating a game")
                )

        return rsvp_closed

    def validate_status(self, status: str) -> str:
        # Validation conditions while creating a game
        if not self.instance:
            if status != Game.STATUS_DRAFT:
                raise serializers.ValidationError(
                    _("Game can only be created in DRAFT status")
                )
        else:
            if status in [Game.STATUS_STARTED, Game.STATUS_ENDED]:
                raise serializers.ValidationError(
                    _(
                        "Status Started and Status Ended are set automatically by the system and cannot be set manually"
                    )
                )

        return status

    def validate(self, data):

        if not self.instance:
            start_time = data.get("start_time", False) and pendulum.instance(
                data["start_time"]
            )
            end_time = data.get("end_time", False) and pendulum.instance(
                data["end_time"]
            )
            rsvp_open_time = data.get("rsvp_open_time", False) and pendulum.instance(
                data["rsvp_open_time"]
            )
            rsvp_close_time = data.get("rsvp_close_time", False) and pendulum.instance(
                data["rsvp_close_time"]
            )
        else:
            start_time = data.get("start_time", False) or self.instance.start_time
            end_time = data.get("end_time", False) or self.instance.end_time

            start_time = pendulum.instance(start_time)
            end_time = pendulum.instance(end_time)

            rsvp_open_time = (
                data.get("rsvp_open_time", False) or self.instance.rsvp_open_time
            )
            rsvp_close_time = (
                data.get("rsvp_close_time", False) or self.instance.rsvp_close_time
            )

            rsvp_open_time = rsvp_open_time and pendulum.instance(rsvp_open_time)
            rsvp_close_time = rsvp_close_time and pendulum.instance(rsvp_close_time)

        if start_time and end_time and end_time < start_time:
            raise serializers.ValidationError(
                {"end_time": [_("End time cannot be before start time.")]}
            )

        if start_time and end_time and end_time.diff(start_time).in_hours() > 12:
            raise serializers.ValidationError(
                {"end_time": [_("Game cannot be greater than 12 hours long.")]}
            )

        rsvp_open_time_limit = pendulum.now("UTC").subtract(hours=12)

        if rsvp_open_time and rsvp_open_time < rsvp_open_time_limit:
            raise serializers.ValidationError(
                {
                    "rsvp_open_time": [
                        _("RSVP open time cannot be more than 12 hours in the past.")
                    ]
                }
            )

        if rsvp_open_time and rsvp_open_time > start_time:
            raise serializers.ValidationError(
                {"rsvp_open_time": [_("RSVP open time cannot be before start time.")]}
            )

        if rsvp_close_time and rsvp_close_time > start_time:
            raise serializers.ValidationError(
                {"rsvp_close_time": [_("RSVP close time cannot be after start time.")]}
            )

        if rsvp_open_time and rsvp_close_time and rsvp_close_time < rsvp_open_time:
            raise serializers.ValidationError(
                {
                    "rsvp_close_time": [
                        _("RSVP close time cannot be before RSVP open time.")
                    ]
                }
            )

        return data

    def create(self, validated_data) -> Game:
        user = self.context["request"].user

        if not validated_data.get("rsvp_open_time", False):
            validated_data["rsvp_open_time"] = timezone.now()

        if not validated_data.get("rsvp_close_time", False):
            validated_data["rsvp_close_time"] = validated_data[
                "start_time"
            ] + timedelta(minutes=-15)

        game = Game.objects.create(organizer=user, **validated_data)

        return game

    def update(self, instance: Game, validated_data) -> Game:

        status = validated_data.pop("status", None)

        for k, v in validated_data.items():
            setattr(instance, k, v)

        if status and status != instance.status:
            try:
                instance.transition_status(status)
            except TransitionNotAllowed:
                raise serializers.ValidationError(_("State transition not allowed"))

        instance.save()
        return instance

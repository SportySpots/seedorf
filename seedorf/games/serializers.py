from django.core.mail import EmailMessage
from django.utils.translation import ugettext_lazy as _
from rest_framework import serializers
from rest_framework_nested.serializers import NestedHyperlinkedModelSerializer

from seedorf.sports.models import Sport
from seedorf.spots.models import Spot
from seedorf.users.serializers import UserSerializer
from .models import Game, RsvpStatus


class RsvpStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = RsvpStatus
        fields = ("uuid", "status", "user", "created_at", "modified_at")
        read_only_fields = ("uuid", "created_at", "modified_at")


class RsvpStatusNestedSerializer(NestedHyperlinkedModelSerializer):
    # NOTE: User is readonly as it is get/set direct from the request
    # TODO: Only the logged in user can create an rsvp for himself/ herself
    # TODO: Check if the game is invite only and see if the user was invited
    # TODO: Check if the game max users count has been reached.
    user = UserSerializer(many=False, required=False)

    class Meta:
        model = RsvpStatus
        fields = ("uuid", "status", "user", "created_at", "modified_at")
        read_only_fields = ("uuid", "user", "created_at", "modified_at")

    def create(self, validated_data):
        if self.context["view"].basename == "game-rsvps":
            game_uuid = self.context["view"].kwargs["game_uuid"]
            game = Game.objects.get(uuid=game_uuid)
            user = self.context["request"].user
            status = validated_data["status"]

            rsvp = RsvpStatus.objects.create(game=game, user=user, status=status)

            self.send_confirmation_mail(game, user, status)
            return rsvp

        return {}

    def update(self, instance, validated_data):
        if self.context["view"].basename == "game-rsvps":
            game_uuid = self.context["view"].kwargs["game_uuid"]
            game = Game.objects.get(uuid=game_uuid)
            user = self.context["request"].user
            status = validated_data["status"]

            try:
                rsvp = RsvpStatus.objects.get(game__uuid=game_uuid, user__uuid=user.uuid)
            except RsvpStatus.DoesNotExist:
                raise serializers.ValidationError(_("Invalid game."))

            if rsvp.user.uuid != user.uuid:
                raise serializers.ValidationError(_("Invalid user."))

            rsvp.status = status
            rsvp.save()

            self.send_confirmation_mail(game, user, status)
            return rsvp

    @staticmethod
    def send_confirmation_mail(game, user, status):
        # TODO: Send the game details e.g. time, name, type of sport
        # TODO: Create ICS file for calendar
        ctx = {
            "organizer_first_name": game.organizer.first_name,
            "first_name": user.first_name,
            # TODO: Fix game url hardcoding
            "game_url": "https://www.sportyspots.com/games/{}".format(game.uuid),
        }

        message = EmailMessage(subject=None, body=None, to=[user.email])

        if status == RsvpStatus.ATTENDING:
            # REF: https://account.postmarkapp.com/servers/3930160/templates/6789246/edit
            message.template_id = 6789246  # use this Postmark template
        elif status == RsvpStatus.DECLINED:
            # REF: https://account.postmarkapp.com/servers/3930160/templates/6934047/edit
            message.template_id = 6934047  # use this Postmark template
        else:
            # Do nothing if rsvp status is not set.
            return

        message.merge_global_data = ctx

        message.send()


class GameSportNestedSerializer(NestedHyperlinkedModelSerializer):
    uuid = serializers.UUIDField(required=True)

    class Meta:
        model = Sport
        fields = ("uuid", "category", "name", "description", "created_at", "modified_at")
        read_only_fields = ("category", "name", "description", "created_at", "modified_at")

    def create(self, validated_data):
        game_uuid = self.context["view"].kwargs["game_uuid"]
        game = Game.objects.get(uuid=game_uuid)

        sport_uuid = validated_data["uuid"]
        try:
            sport = Sport.objects.get(uuid=str(sport_uuid))
        except Sport.DoesNotExist:
            raise serializers.ValidationError(_("Sport not found"))

        # if the game already has a spot assigned, then check if the sport being assinged belongs to the spot
        if game.spot:
            spot = Spot.objects.filter(sports__uuid=sport_uuid).first()
            if not spot or game.spot.uuid != spot.uuid:
                raise serializers.ValidationError(
                    _("Invalid Sport. Sport being assigned is not associated with the" " game spot")
                )

        game.sport = sport
        game.save()

        return sport


class GameSpotNestedSerializer(NestedHyperlinkedModelSerializer):
    uuid = serializers.UUIDField(required=True)

    class Meta:
        model = Spot
        fields = ("uuid", "created_at", "modified_at")
        read_only_fields = ("created_at", "modified_at")

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
                        _("Invalid Spot. Spot being assigned doesnt have the already " "associated sport")
                    )

            game.spot = spot
            game.save()

            return spot

        return {}


class GameSerializer(serializers.ModelSerializer):
    # organizer = GameUserNestedSerializer(read_only=True, many=False)
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

    def create(self, validated_data):
        user = self.context["request"].user
        game = Game.objects.create(organizer=user, **validated_data)
        return game

    def update(self, instance, validated_data):

        for k, v in validated_data.items():
            setattr(instance, k, v)

        instance.save()

        # Send confirmation email to organizer if the status of the game is set to planned
        status = validated_data.get("status", None)

        if status == instance.STATUS_PLANNED:
            self.send_confirmation_mail(instance)

        return instance

    @staticmethod
    def send_confirmation_mail(game):

        ctx = {
            "first_name": game.organizer.first_name,
            # TODO: Fix game url hardcoding
            "game_url": "https://www.sportyspots.com/games/{}".format(game.uuid),
        }

        message = EmailMessage(subject=None, body=None, to=[game.organizer.email])

        # REF: https://account.postmarkapp.com/servers/3930160/templates/6934046/edit
        message.template_id = 6934046  # use this Postmark template

        message.merge_global_data = ctx

        message.send()

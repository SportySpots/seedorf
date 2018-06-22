from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from seedorf.games.serializers import GameSportNestedSerializer
from seedorf.spots.serializers import SpotSportNestedSerializer
from seedorf.utils.permissions import IsAdminOrReadOnly
from seedorf.utils.regex import UUID as REGEX_UUID
from .models import Sport
from .serializers import SportSerializer


class SportViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows all sports to be viewed.
    """

    queryset = Sport.objects.filter(deleted_at=None)
    serializer_class = SportSerializer
    lookup_field = "uuid"
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAdminOrReadOnly,)


class SpotSportsNestedViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows sports available at a spot to be viewed.
    """

    serializer_class = SpotSportNestedSerializer
    lookup_field = "uuid"
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAuthenticatedOrReadOnly,)
    http_method_names = ("options", "head", "get", "post")

    def get_queryset(self):
        return Sport.objects.filter(spots__uuid__in=[self.kwargs["spot_uuid"]])


class GameSportNestedViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows a sport associated with a game to be viewed.
    """

    serializer_class = GameSportNestedSerializer
    lookup_field = "uuid"
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAuthenticatedOrReadOnly,)
    http_method_names = ("options", "head", "get", "post")

    def get_queryset(self):
        return Sport.objects.filter(sport_games__uuid=self.kwargs["game_uuid"])


class UserSportNestedViewSet(viewsets.ModelViewSet):
    """
    API endpoint that shows sports followed by a user.
    """

    serializer_class = UserSportNestedSerializer
    lookup_field = "uuid"
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAuthenticatedOrReadOnly,)
    http_method_names = ("options", "head", "get", "post")

    def get_queryset(self):
        return Sport.objects.filter(followers__user__uuid__exact=self.kwargs["user_uuid"])

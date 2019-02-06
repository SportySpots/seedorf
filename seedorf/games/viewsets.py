from django_filters import rest_framework as filters
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from seedorf.utils.regex import UUID as REGEX_UUID
from .filters import GameFilter, RsvpStatusFilter
from .models import Game, RsvpStatus
from .serializers import GameSerializer, RsvpStatusNestedSerializer


class GameViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows games to be viewed or edited.
    """

    queryset = Game.objects.filter(deleted_at=None).order_by("-start_time")
    serializer_class = GameSerializer
    lookup_field = "uuid"
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (filters.DjangoFilterBackend,)
    filter_class = GameFilter


class GameRsvpStatusNestedViewset(viewsets.ModelViewSet):
    """
    API endpoint that allows game RSVPs to be viewed or edited.
    """

    serializer_class = RsvpStatusNestedSerializer
    lookup_field = "uuid"
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (filters.DjangoFilterBackend,)
    filter_class = RsvpStatusFilter

    def get_queryset(self):
        return RsvpStatus.objects.filter(game__uuid=self.kwargs["game_uuid"])

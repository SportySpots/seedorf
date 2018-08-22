from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from seedorf.utils.regex import UUID as REGEX_UUID
from .models import Game, RsvpStatus
from .serializers import GameSerializer, RsvpStatusNestedSerializer, RsvpStatusSerializer
from django_filters import rest_framework as filters


class GameFilter(filters.FilterSet):
    class Meta:
        model = Game
        fields = {
            "organizer__uuid": ["exact"],
            "sport__uuid": ["exact"],
            "sport__category": ["exact"],
            "spot__uuid": ["exact"],
            "spot__name": ["exact", "icontains"],
            "name": ["exact", "icontains"],
            "start_time": ["lte", "gte"],
            "end_time": ["lte", "gte"],
            "rsvp_open_time": ["lte", "gte"],
            "rsvp_close_time": ["lte", "gte"],
            "rsvp_closed": ["exact"],
            "status": ["exact"],
            "invite_mode": ["exact"],
            "capacity": ["lte", "gte"],
            "show_remaining": ["exact"],
            "is_listed": ["exact"],
            "is_shareable": ["exact"],
            "is_featured": ["exact"],
        }


class RsvpStatusFilter(filters.FilterSet):
    class Meta:
        model = RsvpStatus
        fields = {
            "game__uuid": ["exact"],
            "user__uuid": ["exact"],
            "status": ["exact"]
        }


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


class RsvpStatusViewset(viewsets.ModelViewSet):
    """
    API endpoint that allows game RSVPs to be viewed or edited.
    """

    queryset = RsvpStatus.objects.filter(deleted_at=None)
    serializer_class = RsvpStatusSerializer
    lookup_field = "uuid"
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (filters.DjangoFilterBackend,)
    filter_class = RsvpStatusFilter


class GameRsvpStatusNestedViewset(viewsets.ModelViewSet):
    """
    API endpoint that allows game RSVPs to be viewed or edited.
    """

    serializer_class = RsvpStatusNestedSerializer
    lookup_field = "uuid"
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        return RsvpStatus.objects.filter(game__uuid=self.kwargs["game_uuid"])

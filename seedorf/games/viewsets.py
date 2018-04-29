from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from seedorf.utils.regex import UUID as REGEX_UUID
from .models import Game, RSVPStatus
from .serializers import GameSerializer, RsvpStatusNestedSerializer, RsvpStatusSerializer


class GameViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows games to be viewed or edited.
    """
    queryset = Game.objects.filter(deleted_at=None).order_by('-start_time')
    serializer_class = GameSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RsvpStatusViewset(viewsets.ModelViewSet):
    """
    API endpoint that allows game RSVPs to be viewed or edited.
    """
    queryset = RSVPStatus.objects.all()
    serializer_class = RsvpStatusSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RsvpStatusNestedViewset(viewsets.ModelViewSet):
    """
    API endpoint that allows game RSVPs to be viewed or edited.
    """
    queryset = RSVPStatus.objects.all()
    serializer_class = RsvpStatusNestedSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAuthenticatedOrReadOnly,)

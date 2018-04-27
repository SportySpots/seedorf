from rest_framework import viewsets

from seedorf.utils.regex import UUID as REGEX_UUID
from .models import Game, RSVPStatus
from .serializers import GameSerializer, RSVPStatusSerializer


class GameViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows games to be viewed or edited.
    """
    queryset = Game.objects.all().order_by('-start_time')
    serializer_class = GameSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID


class RSVPViewset(viewsets.ModelViewSet):
    """
    API endpoint that allows game RSVPs to be viewed or edited.
    """
    queryset = RSVPStatus.objects.all()
    serializer_class = RSVPStatusSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID

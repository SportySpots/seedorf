from rest_framework import viewsets

from .models import Game, RSVPStatus
from .serializers import GameSerializer, RSVPStatusSerializer


class GameViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows games to be viewed or edited
    """
    queryset = Game.objects.all().order_by('-start_time')
    serializer_class = GameSerializer
    lookup_field = 'uuid'
    lookup_value_regex = '[0-9a-f]{32}'


class RSVPViewset(viewsets.ModelViewSet):
    """
    API endpoint that allows game RSVPs to be viewed or edited
    """
    queryset = RSVPStatus.objects.all()
    serializer_class = RSVPStatusSerializer

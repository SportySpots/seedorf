from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from seedorf.utils.permissions import IsAdminOrReadOnly
from seedorf.utils.regex import UUID as REGEX_UUID
from .models import Sport
from .serializers import SportSerializer, SportNestedSerializer


class SportViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows sports to be viewed.
    """
    queryset = Sport.objects.filter(deleted_at=None)
    serializer_class = SportSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAdminOrReadOnly,)


class SportNestedViewSet(viewsets.ModelViewSet):
    serializer_class = SportNestedSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAuthenticatedOrReadOnly,)
    http_method_names = ('options', 'head', 'get', 'post')

    def get_queryset(self):
        if self.basename == 'spot-sports':
            return Sport.objects.filter(spots__uuid__in=[self.kwargs['spot_uuid']])
        elif self.basename == 'game-sport':
            return Sport.objects.filter(sport_games__uuid=self.kwargs['game_uuid'])

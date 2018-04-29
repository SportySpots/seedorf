from rest_framework import viewsets

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
    queryset = Sport.objects.filter(deleted_at=None)
    serializer_class = SportNestedSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAdminOrReadOnly,)

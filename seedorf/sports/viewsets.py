from rest_framework import viewsets

from seedorf.utils.regex import UUID as REGEX_UUID
from .models import Sport
from .serializers import SportSerializer
from seedorf.utils.permissions import IsAdminOrReadOnly


class SportViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows sports to be viewed.
    """
    queryset = Sport.objects.all()
    serializer_class = SportSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsAdminOrReadOnly,)

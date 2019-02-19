from rest_framework import viewsets
from rest_framework import mixins

from seedorf.sports.models import Sport
from seedorf.sports.serializers import SportSerializer
from seedorf.spots.models import Spot
from seedorf.spots.serializers import SpotSerializer
from seedorf.utils.permissions import IsOwnerOrReadOnly
from seedorf.utils.regex import UUID as REGEX_UUID
from .models import User, UserProfile
from .serializers import UserProfileSerializer, UserSerializer


class UserViewSet(mixins.CreateModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = User.objects.all().order_by("-date_joined")
    serializer_class = UserSerializer
    lookup_field = "uuid"
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsOwnerOrReadOnly,)


class UserProfileNestedViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows user profile to be viewed or edited.
    """

    serializer_class = UserProfileSerializer
    lookup_field = "uuid"
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsOwnerOrReadOnly,)

    def get_queryset(self):
        user_uuid = self.kwargs["user_uuid"]
        return UserProfile.objects.filter(user__uuid=user_uuid)

    # TODO: Fix avatar image creation
    # @action(methods=['post'], detail=True, permission_classes=[IsOwnerOrReadOnly])
    # def avatar(self, request, user_uuid=None, uuid=None):
    #     try:
    #         file = request.data['file']
    #     except KeyError:
    #         raise ParseError('Request has no resource file attached')
    #     user_profile = UserProfile.objects.create(image=file, ....)


class UserProfileSportNestedViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users sports to be viewed or edited.
    """

    serializer_class = SportSerializer
    lookup_field = "uuid"
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsOwnerOrReadOnly,)

    def get_queryset(self):
        profile_uuid = self.kwargs["profile_uuid"]
        return Sport.objects.filter(followers__uuid=profile_uuid)


class UserProfileSpotNestedViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users spots to be viewed or edited.
    """

    serializer_class = SpotSerializer
    lookup_field = "uuid"
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsOwnerOrReadOnly,)

    def get_queryset(self):
        profile_uuid = self.kwargs["profile_uuid"]
        return Spot.objects.filter(followers__uuid=profile_uuid)


class GameUserNestedViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows nested users to be viewed or edited.
    """

    serializer_class = UserSerializer
    lookup_field = "uuid"
    lookup_value_regex = REGEX_UUID

    def get_queryset(self):
        game_uuid = self.kwargs["game_uuid"]
        return User.objects.filter(game_organizers__uuid=game_uuid)

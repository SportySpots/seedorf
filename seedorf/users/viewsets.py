from django.contrib.auth.models import Group
from rest_framework import viewsets

from seedorf.utils.permissions import IsOwnerOrReadOnly
from seedorf.utils.regex import UUID as REGEX_UUID
from .models import User, UserProfile
from .serializers import UserSerializer, UserProfileNestedSerializer, GroupSerializer


class UserViewSet(viewsets.ModelViewSet):
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

    serializer_class = UserProfileNestedSerializer
    lookup_field = "uuid"
    lookup_value_regex = REGEX_UUID
    # TODO: Only the user can update his/her own profile
    permission_classes = (IsOwnerOrReadOnly,)

    def get_queryset(self):
        user_uuid = self.kwargs["user_uuid"]
        return UserProfile.objects.filter(user__uuid=user_uuid)


class UserProfileSportNestedViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows user profile to be viewed or edited.
    """

    serializer_class = UserProfileNestedSerializer
    lookup_field = "uuid"
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsOwnerOrReadOnly,)

    def get_queryset(self):
        user_uuid = self.kwargs["user_uuid"]
        return UserProfile.objects.filter(user__uuid=user_uuid)


class UserProfileSpotNestedViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows user profile to be viewed or edited.
    """

    serializer_class = UserProfileNestedSerializer
    lookup_field = "uuid"
    lookup_value_regex = REGEX_UUID
    permission_classes = (IsOwnerOrReadOnly,)

    def get_queryset(self):
        user_uuid = self.kwargs["user_uuid"]
        return UserProfile.objects.filter(user__uuid=user_uuid)


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


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """

    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    lookup_field = "uuid"
    lookup_value_regex = REGEX_UUID

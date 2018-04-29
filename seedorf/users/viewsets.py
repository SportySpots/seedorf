from django.contrib.auth.models import Group
from rest_framework import viewsets

from seedorf.utils.regex import UUID as REGEX_UUID
from .models import User
from .serializers import UserSerializer, GroupSerializer, UserNestedSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID


class UserNestedViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows nested users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserNestedSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    lookup_field = 'uuid'
    lookup_value_regex = REGEX_UUID

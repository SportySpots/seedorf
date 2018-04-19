import graphene

from graphene_django.types import DjangoObjectType
from .models import User, UserProfile


class UserType(DjangoObjectType):
    class Meta:
        model = User


class UserProfileType(DjangoObjectType):
    class Meta:
        model = UserProfile


class Query(object):
    user = graphene.Field(UserType, uuid=graphene.UUID())
    users = graphene.List(UserType)
    user_profile = graphene.Field(UserProfileType, uuid=graphene.UUID())
    user_profiles = graphene.List(UserProfileType)

    def resolve_user(self, args, **kwargs):
        uuid = kwargs.get('uuid')

        if uuid is not None:
            return User.objects.filter(uuid=uuid)

        return None

    def resolve_users(self, args, **kwargs):
        return User.objects.all()

    def resolve_user_profile(self, args, **kwargs):
        uuid = kwargs.get('uuid')

        if uuid is not None:
            return UserProfile.objects.filter(uuid=uuid)

        return None

    def resolve_user_profiles(self, args, **kwargs):
        return UserProfile.objects.all()

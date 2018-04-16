import graphene

from graphene_django.types import DjangoObjectType
from .models import User


class UserType(DjangoObjectType):
    class Meta:
        model = User


class Query(object):
    user = graphene.Field(UserType, uuid=graphene.UUID())
    users = graphene.List(UserType)

    def resolve_user(self, args, **kwargs):
        uuid = kwargs.get('uuid')

        if uuid is not None:
            return User.objects.filter(uuid=uuid)

        return None

    def resolve_users(self, args, **kwargs):
        return User.objects.all()

import graphene
from graphene_django.types import DjangoObjectType

from .models import Sport


class SportType(DjangoObjectType):
    class Meta:
        model = Sport


class Query(object):
    sport = graphene.Field(SportType, uuid=graphene.UUID())
    sports = graphene.List(SportType)

    def resolve_sport(self, args, **kwargs):
        uuid = kwargs.get('uuid')

        if uuid is not None:
            return Sport.objects.filter(uuid=uuid).first()

        return None

    def resolve_sports(self, args, **kwargs):
        return Sport.objects.all()

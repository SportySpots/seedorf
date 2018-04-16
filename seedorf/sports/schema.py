import graphene

from graphene_django.types import DjangoObjectType
from .models import Sport


class SportType(DjangoObjectType):
    class Meta:
        model = Sport


class Query(graphene.AbstractType):
    sports = graphene.List(SportType)

    def resolve_sports(self, args, context, info):
        return Sport.objects.all()

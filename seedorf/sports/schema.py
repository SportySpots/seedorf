import graphene
from graphene_django_extras import (DjangoFilterPaginateListField, DjangoObjectType, LimitOffsetGraphqlPagination)

from .models import Sport
from .viewsets import SportFilter


class SportType(DjangoObjectType):
    class Meta:
        model = Sport


class Query(object):
    sport = graphene.Field(SportType, uuid=graphene.UUID())
    sports = DjangoFilterPaginateListField(
        SportType,
        filterset_class=SportFilter,
        pagination=LimitOffsetGraphqlPagination(),
    )

    @staticmethod
    def resolve_sport(args, **kwargs):
        uuid = kwargs.get("uuid")

        if uuid is not None:
            return Sport.objects.filter(uuid=uuid).first()

        return None

    @staticmethod
    def resolve_sports(args, **kwargs):
        return Sport.objects.all()

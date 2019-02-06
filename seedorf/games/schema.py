import graphene
from graphene_django_extras import (DjangoFilterPaginateListField, DjangoObjectType, LimitOffsetGraphqlPagination)

from seedorf.users.schema import UserType
from .models import Game, RsvpStatus
from .viewsets import GameFilter, RsvpStatusFilter


class GameType(DjangoObjectType):
    # NOTE: To break game <-> spot circular dependency
    # REF: https://github.com/graphql-python/graphene/issues/522#issuecomment-324066522
    spot = graphene.Field("seedorf.spots.schema.SpotType")
    organizer = graphene.Field(UserType)

    class Meta:
        model = Game

    @property
    def spots_class(self):
        return self._meta.fields["spots"].type


class RsvpStatusType(DjangoObjectType):
    user = graphene.Field(UserType)

    class Meta:
        model = RsvpStatus


class Query(object):
    game = graphene.Field(GameType, uuid=graphene.UUID())
    games = DjangoFilterPaginateListField(
        GameType, pagination=LimitOffsetGraphqlPagination(), filterset_class=GameFilter
    )

    rsvp_status = graphene.Field(RsvpStatusType, uuid=graphene.UUID())
    rsvp_statuses = DjangoFilterPaginateListField(
        RsvpStatusType,
        pagination=LimitOffsetGraphqlPagination(),
        filterset_class=RsvpStatusFilter,
    )

    @staticmethod
    def resolve_game(args, info, **kwargs):
        uuid = kwargs.get("uuid")

        if uuid is not None:
            return Game.objects.get(uuid=uuid)

        return None

    @staticmethod
    def resolve_games(args, **kwargs):
        return Game.objects.all()

    @staticmethod
    def resolve_rsvp_status(args, **kwargs):
        uuid = kwargs.get("uuid")

        if uuid is not None:
            return RsvpStatus.objects.filter(uuid=uuid).first()

        return None

    @staticmethod
    def resolve_rsvp_statuses(args, **kwargs):
        return RsvpStatus.objects.all()

import graphene
from graphene_django_extras import (DjangoObjectType, DjangoFilterPaginateListField, LimitOffsetGraphqlPagination)
from seedorf.users.schema import UserType
from .models import Game, RsvpStatus
from .viewsets import GameFilter, RsvpStatusFilter


class GameType(DjangoObjectType):
    # NOTE: To break game <-> spot circular dependency
    # REF: https://github.com/graphql-python/graphene/issues/522#issuecomment-324066522
    spot = graphene.Field('seedorf.spots.schema.SpotType')
    organizer = graphene.Field(UserType)

    class Meta:
        model = Game

    @property
    def spots_class(self):
        return self._meta.fields['spots'].type


class RsvpStatusType(DjangoObjectType):
    user = graphene.Field(UserType)

    class Meta:
        model = RsvpStatus


class Query(object):
    game = graphene.Field(GameType, uuid=graphene.UUID())
    games = DjangoFilterPaginateListField(GameType,
                                          pagination=LimitOffsetGraphqlPagination(),
                                          filterset_class=GameFilter)

    rsvp_status = graphene.Field(RsvpStatusType, uuid=graphene.UUID())
    rsvp_statuses = DjangoFilterPaginateListField(RsvpStatusType,
                                                  pagination=LimitOffsetGraphqlPagination(),
                                                  filterset_class=RsvpStatusFilter)

    def resolve_game(self, args, **kwargs):
        uuid = kwargs.get('uuid')

        if uuid is not None:
            return Game.objects.get(uuid=uuid)

        return None

    def resolve_games(self, args, **kwargs):
        return Game.objects.all()

    def resolve_rsvp_status(self, args, **kwargs):
        uuid = kwargs.get('uuid')

        if uuid is not None:
            return RsvpStatus.objects.filter(uuid=uuid).first()

        return None

    def resolve_rsvp_statuses(self, args, **kwargs):
        return RsvpStatus.objects.all()

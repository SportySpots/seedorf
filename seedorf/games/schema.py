import graphene
from graphene_django.types import DjangoObjectType

from .models import Game, RSVPStatus


class GameType(DjangoObjectType):
    class Meta:
        model = Game


class RSVPStatusType(DjangoObjectType):
    class Meta:
        model = RSVPStatus


class Query(object):
    game = graphene.Field(GameType, uuid=graphene.UUID())
    games = graphene.List(GameType)

    rsvp_status = graphene.Field(RSVPStatusType, uuid=graphene.UUID())
    rsvp_statuses = graphene.List(RSVPStatusType)

    def resolve_game(self, args, **kwargs):
        uuid = kwargs.get('uuid')

        if uuid is not None:
            return Game.objects.filter(uuid=uuid)

        return None

    def resolve_games(self, args, **kwargs):
        return Game.objects.all()

    def resolve_rsvp_status(self, args, **kwargs):
        uuid = kwargs.get('uuid')

        if uuid is not None:
            return RSVPStatus.objects.filter(uuid=uuid)

        return None

    def resolve_rsvp_statuses(self, args, **kwargs):
        return RSVPStatus.objects.all()

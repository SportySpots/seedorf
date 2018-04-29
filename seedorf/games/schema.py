import graphene
from graphene_django.types import DjangoObjectType

from .models import Game, RsvpStatus


class GameType(DjangoObjectType):
    class Meta:
        model = Game


class RsvpStatusType(DjangoObjectType):
    class Meta:
        model = RsvpStatus


class Query(object):
    game = graphene.Field(GameType, uuid=graphene.UUID())
    games = graphene.List(GameType)

    rsvp_status = graphene.Field(RsvpStatusType, uuid=graphene.UUID())
    rsvp_statuses = graphene.List(RsvpStatusType)

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

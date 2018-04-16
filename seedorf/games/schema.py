import graphene

from graphene_django.types import DjangoObjectType
from .models import Game, RSVPStatus


class GameType(DjangoObjectType):
    class Meta:
        model = Game


class RSVPStatusType(DjangoObjectType):
    class Meta:
        model = RSVPStatus


class Query(graphene.AbstractType):
    games = graphene.List(GameType)
    rsvp_statuses = graphene.List(RSVPStatusType)

    def resolve_games(self, args, context, info):
        return Game.objects.all()

    def resolve_rsvp_statuses(self, args, content, info):
        return RSVPStatus.objects.all()

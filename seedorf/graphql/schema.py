import graphene
from graphene_django.debug import DjangoDebug

from seedorf.games.schema import Query as GamesQuery
from seedorf.locations.schema import Query as LocationsQuery
from seedorf.sports.schema import Query as SportsQuery
from seedorf.spots.schema import Query as SpotsQuery
from seedorf.users.schema import Query as UsersQuery


class Query(LocationsQuery,
            SportsQuery,
            SpotsQuery,
            GamesQuery,
            UsersQuery,
            graphene.ObjectType):
    debug = graphene.Field(DjangoDebug, name='debug')


schema = graphene.Schema(query=Query, auto_camelcase=False)

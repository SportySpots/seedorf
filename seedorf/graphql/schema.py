import graphene

from graphene_django.types import DjangoObjectType

from seedorf.games.models import Game, RSVPStatus
from seedorf.locations.models import Address
from seedorf.reactions.models import Reaction
from seedorf.sports.models import Sport
from seedorf.spots.models import Spot, SpotImage, SpotAmenity, SpotOpeningTime
from seedorf.users.models import User
from graphql_geojson import GeoJSONType


# from seedorf.organizations.models import


class GameType(DjangoObjectType):
    class Meta:
        model = Game


class RsvpType(DjangoObjectType):
    class Meta:
        model = RSVPStatus


class LocationType(GeoJSONType):

    class Meta:
        model = Address
        geojson_field = 'location'


class ReactionType(DjangoObjectType):
    class Meta:
        model = Reaction


class SportType(DjangoObjectType):
    class Meta:
        model = Sport


class SpotType(DjangoObjectType):
    class Meta:
        model = Spot


class SpotImageType(DjangoObjectType):
    class Meta:
        model = SpotImage


class SpotAmenityType(DjangoObjectType):
    class Meta:
        model = SpotAmenity


class SpotOpeningTimeType(DjangoObjectType):
    class Meta:
        model = SpotOpeningTime


class UserType(DjangoObjectType):
    class Meta:
        model = User


class Query(graphene.ObjectType):
    users = graphene.List(User)

    def resolve_users(self, info):
        return User.objects.all()


# schema = graphene.Schema(query=Query)

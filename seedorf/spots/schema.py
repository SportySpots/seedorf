import graphene

from graphene_django.types import DjangoObjectType
from .models import Spot, SpotAmenity, SpotImage, SpotOpeningTime


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


class Query(graphene.AbstractType):
    spots = graphene.List(SpotType)

    def resolve_spots(self, args, context, info):
        return Spot.objects.all()




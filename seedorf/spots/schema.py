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


class Query(object):
    spot = graphene.Field(SpotType, uuid=graphene.UUID())
    spots = graphene.List(SpotType)


    def resolve_spots(self, info, **kwargs):
        return Spot.objects.all()

    def resolve_spot(self, info, **kwargs):
        uuid = kwargs.get('uuid')

        if uuid is not None:
            return Spot.objects.filter(uuid=uuid)

        return None



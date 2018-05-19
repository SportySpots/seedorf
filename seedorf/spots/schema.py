import graphene
from graphene_django.types import DjangoObjectType
from django.conf import settings
from .models import Spot, SpotAmenity, SpotImage, SpotOpeningTime


class SpotType(DjangoObjectType):
    class Meta:
        model = Spot


class SpotImageType(DjangoObjectType):
    class Meta:
        model = SpotImage

    def resolve_image(self, info, **kwargs):
        if self.image:
            return '{}{}'.format(settings.MEDIA_URL, self.image)
        else:
            return ""


class SpotAmenityType(DjangoObjectType):
    class Meta:
        model = SpotAmenity


class SpotOpeningTimeType(DjangoObjectType):
    class Meta:
        model = SpotOpeningTime


class Query(graphene.ObjectType):
    spot = graphene.Field(SpotType, uuid=graphene.UUID())
    spots = graphene.List(SpotType)

    def resolve_spot(self, info, **kwargs):
        uuid = kwargs.get('uuid')

        if uuid is not None:
            return Spot.objects.filter(uuid=uuid).first()

        return None

    def resolve_spots(self, info, **kwargs):
        return Spot.objects.all()

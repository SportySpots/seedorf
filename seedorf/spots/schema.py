import graphene
from django.conf import settings
from django.utils.translation import ugettext_lazy as _
from graphene_django_extras import (DjangoObjectType, DjangoFilterPaginateListField, LimitOffsetGraphqlPagination)

from seedorf.sports.schema import SportType
from .models import Spot, SpotAmenity, SpotImage, SpotOpeningTime


class SpotType(DjangoObjectType):
    sports = graphene.List(SportType)

    class Meta:
        description = _('Type definition for a single spot')
        model = Spot
        filter_fields = {
            'uuid': ['exact', ],
        }

    def resolve_sports(self, info, **kwargs):
        return self.sports.all()


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
    spots = DjangoFilterPaginateListField(SpotType, pagination=LimitOffsetGraphqlPagination())

    def resolve_spot(self, info, **kwargs):
        uuid = kwargs.get('uuid')

        if uuid is not None:
            return Spot.objects.filter(uuid=uuid).first()

        return None

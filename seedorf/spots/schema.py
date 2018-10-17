import graphene
from django.conf import settings
from django.utils.translation import ugettext_lazy as _
from graphene_django.types import DjangoObjectType
from graphene_django_extras import DjangoFilterPaginateListField
from graphene_django_extras.paginations import LimitOffsetGraphqlPagination

from seedorf.locations.schema import AddressType
from seedorf.sports.schema import SportType
from .models import Spot, SpotAmenity, SpotImage, SpotOpeningTime
from .viewsets import SpotFilter


class SpotImageType(DjangoObjectType):
    class Meta:
        model = SpotImage

    def resolve_image(self, info, **kwargs):
        if self.image:
            return "{}{}".format(settings.MEDIA_URL, self.image)
        else:
            return ""


class SpotAmenityType(DjangoObjectType):
    class Meta:
        model = SpotAmenity


class SpotOpeningTimeType(DjangoObjectType):
    class Meta:
        model = SpotOpeningTime


class SpotType(DjangoObjectType):
    sports = graphene.List(SportType)
    games = graphene.List("seedorf.games.schema.GameType")
    address = graphene.Field(AddressType)

    class Meta:
        description = _("Type definition for a single spot")
        model = Spot
        exclude_fields = ("spot_games",)

    def resolve_sports(self, info, **kwargs):
        return self.sports.all()

    def resolve_games(self, info, **kwargs):
        return self.spot_games.all()


class Query(graphene.ObjectType):
    spot = graphene.Field(SpotType, uuid=graphene.UUID())
    spots = DjangoFilterPaginateListField(
        SpotType, filterset_class=SpotFilter, pagination=LimitOffsetGraphqlPagination()
    )

    @staticmethod
    def resolve_spot(info, **kwargs):
        uuid = kwargs.get("uuid")

        if uuid is not None:
            return Spot.objects.filter(uuid=uuid).first()

        return None

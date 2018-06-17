import json

import graphene
from django.contrib.gis.db import models
from graphene_django.converter import convert_django_field
from graphene_django.types import DjangoObjectType

from .models import Address


# REF: https://github.com/graphql-python/graphene-django/issues/390
class GeoJSON(graphene.Scalar):

    @classmethod
    def serialize(cls, value):
        return json.loads(value.geojson)


@convert_django_field.register(models.PointField)
def convert_field_to_geojson(field, registry=None):
    return graphene.Field(
        GeoJSON,
        description=field.help_text,
        required=not field.null)


class AddressType(DjangoObjectType):
    class Meta:
        model = Address


class Query(object):
    address = graphene.Field(AddressType, uuid=graphene.UUID())
    addresses = graphene.List(AddressType)

    def resolve_address(self, args, **kwargs):
        uuid = kwargs.get('uuid')

        if uuid is not None:
            return Address.objects.filter(uuid=uuid).first()

        return None

    def resolve_addresses(self, args, **kwargs):
        return Address.objects.all()

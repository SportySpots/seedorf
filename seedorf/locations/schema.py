import graphene
from graphene_django.types import DjangoObjectType

from .models import Address


class AddressType(DjangoObjectType):
    class Meta:
        model = Address


class Query(object):
    address = graphene.Field(AddressType, uuid=graphene.UUID())
    addresses = graphene.List(AddressType)

    def resolve_address(self, args, **kwargs):
        uuid = kwargs.get('uuid')

        if uuid is not None:
            return Address.objects.filter(uuid=uuid)

        return None

    def resolve_addresses(self, args, **kwargs):
        return Address.objects.all()

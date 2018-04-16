import graphene

from graphene_django.types import DjangoObjectType
from .models import Address


class AddressType(DjangoObjectType):
    class Meta:
        model = Address


class Query(object):
    addresses = graphene.List(AddressType)

    def resolve_addresses(self, args, content, info):
        return Address.objects.all()

import factory

from ..models import Address


class AddressFactory(factory.Factory):
    class Meta:
        model = Address

import factory

from ..models import Address


class AddressFactory(factory.django.DjangoModelFactory):
    raw_address = factory.Faker('address')
    lat = factory.Faker('latitude')
    lng = factory.Faker('longitude')

    class Meta:
        model = Address

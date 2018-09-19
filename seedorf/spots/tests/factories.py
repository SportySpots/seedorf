import random

import factory

from seedorf.locations.tests.factories import AddressFactory
from seedorf.sports.tests.factories import SportFactory
from seedorf.spots.models import Spot, SpotAmenity, SpotImage, SpotOpeningTime


class SpotFactory(factory.django.DjangoModelFactory):
    address = factory.SubFactory(AddressFactory)
    name = factory.Faker("name")
    owner = factory.Faker("name")
    description = factory.Faker("text")
    logo = factory.django.ImageField()
    homepage_url = factory.Faker("url")

    establishment_date = factory.Maybe(
        "is_permanently_closed",
        yes_declaration=factory.Faker("past_date", start_date="-60d"),
        no_declaration=None,
    )
    closure_date = factory.Maybe(
        "is_permanently_closed",
        yes_declaration=factory.Faker("past_date", start_date="-30d"),
        no_declaration=None,
    )

    @factory.post_generation
    def sports(self, create, extracted, **kwargs):
        # REF: http://factoryboy.readthedocs.io/en/latest/recipes.html#simple-many-to-many-relationship
        if not create:
            # Simple build, do nothing.
            return

        if extracted:
            # A list of sports were passed in, use them
            for sport in extracted:
                self.sports.add(sport)
        else:
            sport = SportFactory()
            self.sports.add(sport)

    class Meta:
        model = Spot


class SpotImageFactory(factory.django.DjangoModelFactory):
    spot = factory.SubFactory(SpotFactory)
    sport = factory.LazyAttribute(lambda o: random.choice(o.spot.sports.all()))
    image = factory.django.ImageField()

    class Meta:
        model = SpotImage


class SpotOpeningTimeFactory(factory.django.DjangoModelFactory):
    spot = factory.SubFactory(SpotFactory)
    sport = factory.LazyAttribute(lambda o: random.choice(o.spot.sports.all()))
    day = factory.Iterator(SpotOpeningTime.DAYS, getter=lambda d: d[0])

    class Meta:
        model = SpotOpeningTime


class SpotAmenityFactory(factory.Factory):
    spot = factory.SubFactory(SpotFactory)
    sport = factory.LazyAttribute(lambda o: random.choice(o.spot.sports.all()))
    data = factory.Dict({"SURFACE": "hard", "FENCE": True})

    class Meta:
        model = SpotAmenity

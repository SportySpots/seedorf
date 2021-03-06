import factory
from ..models import Sport


class SportFactory(factory.django.DjangoModelFactory):
    category = factory.Iterator(Sport.SPORTS, getter=lambda c: c[0])
    name = factory.Faker("word")
    description = factory.Faker("text")

    class Meta:
        model = Sport

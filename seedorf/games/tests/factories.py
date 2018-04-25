import factory
from ..models import Game


class GameFactory(factory.django.DjangoModelFactory):

    class Meta:
        model = Game

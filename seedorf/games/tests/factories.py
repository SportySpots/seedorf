import factory

from seedorf.users.tests.factories import UserFactory
from seedorf.spots.tests.factories import SpotFactory

from ..models import Game, RSVPStatus
import random
from django.utils import timezone
from datetime import timedelta


class GameFactory(factory.django.DjangoModelFactory):
    organizer = factory.SubFactory(UserFactory)
    spot = factory.SubFactory(SpotFactory)
    sport = factory.LazyAttribute(lambda o: o.spot.sports.all()[0])
    name = factory.Faker('word')
    invite_mode = factory.Iterator(Game.INVITE_MODES, getter=lambda d: d[0])
    status = factory.Iterator(Game.STATUSES, getter=lambda d: d[0])
    capacity = random.randint(2, 10)
    show_remaining = factory.Faker('pybool')
    is_listed = factory.Faker('pybool')
    is_shareable = factory.Faker('pybool')
    is_featured = factory.Faker('pybool')

    # params to generate items in the past or in the future
    now = timezone.now()

    # by default the game is created in the future
    rsvp_open_time = factory.LazyAttribute(lambda o: o.now + timedelta(days=2, hours=2))
    rsvp_close_time = factory.LazyAttribute(lambda o: o.now + timedelta(days=2, hours=4))
    start_time = factory.LazyAttribute(lambda o: o.now + timedelta(days=4, hours=2))
    end_time = factory.LazyAttribute(lambda o: o.now + timedelta(days=4, hours=4))

    class Meta:
        model = Game
        exclude = ('now',)

    class Params:
        past = factory.Trait(
            rsvp_open_time=factory.LazyAttribute(lambda o: o.now - timedelta(days=4, hours=4)),
            rsvp_close_time=factory.LazyAttribute(lambda o: o.now - timedelta(days=4, hours=2)),
            start_time=factory.LazyAttribute(lambda o: o.now - timedelta(days=2, hours=4)),
            end_time=factory.LazyAttribute(lambda o: o.now - timedelta(days=2, hours=2)),
        )


class RsvpStatusFactory(factory.django.DjangoModelFactory):
    user = factory.SubFactory(UserFactory)
    game = factory.SubFactory(GameFactory)

    class Meta:
        model = RSVPStatus

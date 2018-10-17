import factory
from seedorf.users.models import User, UserProfile
from seedorf.sports.tests.factories import SportFactory
from seedorf.spots.tests.factories import SpotFactory


class UserFactory(factory.django.DjangoModelFactory):
    first_name = factory.Faker("first_name")
    last_name = factory.Faker("last_name")
    name = factory.LazyAttribute(
        lambda o: "{} {}".format(o.first_name.lower(), o.last_name.lower())
    )
    username = factory.LazyAttribute(
        lambda o: "{}.{}".format(o.first_name.lower(), o.last_name.lower())
    )
    email = factory.LazyAttribute(
        lambda o: "{}.{}@example.com".format(o.first_name.lower(), o.last_name.lower())
    )
    password = factory.PostGenerationMethodCall("set_password", "password")
    is_staff = False

    @factory.post_generation
    def groups(self, create, extracted, **kwargs):
        """
        USAGE: UserFactory.create(groups=(group1, group2, group3))
        """

        if not create:
            # Simple build, do nothing.
            return

        if extracted:
            # A list of groups were passed in, use them
            for group in extracted:
                self.groups.add(group)

    class Meta:
        model = User
        django_get_or_create = ("email",)


class StaffUserFactory(UserFactory):
    is_staff = True


class SuperUserFactory(UserFactory):
    is_superuser = True


class UserProfileFactory(factory.django.DjangoModelFactory):
    user = factory.SubFactory(UserFactory)
    gender = factory.Iterator(UserProfile.GENDERS, getter=lambda g: g[0])
    year_of_birth = 1980
    avatar = factory.django.ImageField()
    country = "NL"
    bio = factory.Faker("text")

    class Meta:
        model = UserProfile

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

    @factory.post_generation
    def spots(self, create, extracted, **kwargs):
        # REF: http://factoryboy.readthedocs.io/en/latest/recipes.html#simple-many-to-many-relationship
        if not create:
            # Simple build, do nothing.
            return

        if extracted:
            # A list of sports were passed in, use them
            for spot in extracted:
                self.spots.add(spot)
        else:
            spot = SpotFactory()
            self.spots.add(spot)

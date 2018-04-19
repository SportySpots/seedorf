import factory
from seedorf.users.models import User, UserProfile


class UserFactory(factory.django.DjangoModelFactory):
    username = factory.Sequence(lambda n: 'user{0}'.format(n))
    email = factory.Sequence(lambda n: 'user{0}@example.com'.format(n))
    password = factory.PostGenerationMethodCall('set_password', 'password')

    name = factory.Sequence(lambda n: 'name{0}'.format(n))

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
        django_get_or_create = ('email', )


class UserProfileFactory(factory.django.DjangoModelFactory):
    user = factory.SubFactory(UserFactory)

    class Meta:
        model = UserProfile

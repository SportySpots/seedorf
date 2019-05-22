import graphene
from graphene_django.types import DjangoObjectType

from seedorf.sports.schema import SportType
from seedorf.spots.schema import SpotType
from .models import User, UserProfile


class UserProfileType(DjangoObjectType):
    sports = graphene.List(SportType)
    spots = graphene.List(SpotType)

    class Meta:
        model = UserProfile
        exclude_fields = ("user",)

    def resolve_avatar(self, info, **kwargs):
        # the default is to send a relative url (str(self.avatar)), but we want a full URL
        try:
            return self.avatar.url
        except ValueError:
            # if no avatar has been set yet
            return None

    def resolve_sports(self, info, **kwargs):
        return self.sports.all()

    def resolve_spots(self, info, **kwargs):
        return self.spots.all()


class UserType(DjangoObjectType):
    profile = graphene.Field(UserProfileType)
    sports = graphene.List(SportType)
    spots = graphene.List(SpotType)

    class Meta:
        model = User
        exclude_fields = ("password", "email")

    def resolve_profile(self, info, **kwargs):
        return self.profile

    def resolve_sports(self, info, **kwargs):
        return self.profile.sports.all()

    def resolver_spots(self, info, **kwargs):
        return self.profile.spots.all()


class Query(object):
    user = graphene.Field(UserType, email=graphene.String(), uuid=graphene.UUID(), id=graphene.ID())
    users = graphene.List(UserType)

    def resolve_user(self, args, **kwargs):
        uuid = kwargs.get("uuid")
        user_id = kwargs.get("id")
        email = kwargs.get("email")

        if uuid is not None:
            return User.objects.filter(uuid=uuid).first()

        if user_id is not None:
            return User.objects.filter(id=user_id).first()

        if email is not None:
            return User.objects.filter(email=email).first()

        return None

    def resolve_users(self, args, **kwargs):
        return User.objects.all()

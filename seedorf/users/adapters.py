from allauth.account.adapter import DefaultAccountAdapter
from allauth.exceptions import ImmediateHttpResponse
from allauth.socialaccount import signals
from allauth.socialaccount.adapter import DefaultSocialAccountAdapter
from allauth.socialaccount.models import SocialLogin
from django.conf import settings
from django.contrib.auth import login
from django.http import HttpResponseRedirect
from django.utils.translation import ugettext_lazy as _
from rest_auth.utils import jwt_encode

from seedorf.users.models import User
from seedorf.utils.email import send_mail
from seedorf.utils.firebase import get_firebase_link

from django.utils.translation import ugettext_lazy as _

class AccountAdapter(DefaultAccountAdapter):
    def is_open_for_signup(self, request):
        return getattr(settings, "ACCOUNT_ALLOW_REGISTRATION", True)

    def send_confirmation_mail(self, request, emailconfirmation, signup):
        user = request.user
        magic_url = str(user.create_magic_link())

        context = {
            "name": emailconfirmation.email_address.user.name,
            "action_url": magic_url,
        }

        send_mail(
            to=emailconfirmation.email_address.email,
            template_prefix="SignupConfirmEmail",
            subject=_("Welcome to SportySpots."),
            language=request.user.profile.language,
            context=context,
        )

    def get_login_redirect_url(self, request):
        # This happens after OAuth
        token = jwt_encode(request.user)
        return get_firebase_link("login?token=" + token)

    def save_user(self, request, user, form, commit=True):
        """
        Saves a new `User` instance using information provided in the
        signup form.
        """
        from allauth.account.utils import user_username, user_email, user_field

        data = form.cleaned_data
        name = data.get("name")
        email = data.get("email")
        username = data.get("username")
        user_email(user, email)
        user_username(user, username)
        if name:
            user_field(user, "name", name)
        if "password1" in data:
            user.set_password(data["password1"])
        else:
            user.set_unusable_password()
        self.populate_username(request, user)
        # user.profile.language = data.get("language", "en")
        if commit:
            # Ability not to commit makes it easier to derive from
            # this adapter by adding
            user.save()
            request.user = user
        return user


class SocialAccountAdapter(DefaultSocialAccountAdapter):
    def connect_by_email(self, request, sociallogin):
        email_address = sociallogin.email_addresses[0].email

        user = User.objects.get(email=email_address)
        # user found with this email address, connect social account to this user.
        login(request, user, "allauth.account.auth_backends.AuthenticationBackend")
        sociallogin.connect(request, request.user)
        signals.social_account_added.send(sender=SocialLogin, request=request, sociallogin=sociallogin)
        raise ImmediateHttpResponse(HttpResponseRedirect(get_firebase_link("login?token=" + jwt_encode(user))))

    def pre_social_login(self, request, sociallogin):
        if sociallogin.user.pk:
            return  # user logged in normally
        else:
            try:
                self.connect_by_email(request, sociallogin)
            except User.DoesNotExist:
                if sociallogin.state["process"] == "login":
                    # user wants to login, but is not yet registered
                    raise ImmediateHttpResponse(HttpResponseRedirect(get_firebase_link("social_login_not_registered")))

    def is_open_for_signup(self, request, sociallogin):
        return getattr(settings, "ACCOUNT_ALLOW_REGISTRATION", True)

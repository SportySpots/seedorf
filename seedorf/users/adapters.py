from allauth.account.adapter import DefaultAccountAdapter
from allauth.socialaccount.adapter import DefaultSocialAccountAdapter
from django.conf import settings
from django.core.mail import EmailMessage


class AccountAdapter(DefaultAccountAdapter):

    def is_open_for_signup(self, request):
        return getattr(settings, 'ACCOUNT_ALLOW_REGISTRATION', True)

    def send_confirmation_mail(self, request, emailconfirmation, signup):
        activate_url = self.get_email_confirmation_url(request, emailconfirmation)

        ctx = {
            "user": emailconfirmation.email_address.user,
            "product_name": "SportySpots",
            "first_name": emailconfirmation.email_address.user.first_name,
            "product_url": "https://www.sportyspots.com",
            "activate_url": activate_url,
            "support_email": "info@sportyspots.com",
            "sender_name": "SportySpots",
            "company_name": "SportySpots",
            "company_address": "Amsterdam, The Netherlands",
            "key": emailconfirmation.key,
        }

        message = EmailMessage(subject=None, to=[emailconfirmation.email_address.email])

        if signup:
            # TODO: Define template ids in settings
            message.template_id = 6756321  # use this Postmark template
        else:
            # TODO: Create a postmark template for email confirmation
            # email_template = 'account/email/email_confirmation'
            message.template_id = 6756321  # use this Postmark template

        message.merge_global_data = ctx

        message.send()


class SocialAccountAdapter(DefaultSocialAccountAdapter):

    def is_open_for_signup(self, request, sociallogin):
        return getattr(settings, 'ACCOUNT_ALLOW_REGISTRATION', True)

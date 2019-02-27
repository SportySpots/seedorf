import os

from django.core.mail import EmailMultiAlternatives
from django.conf import settings
from django.template import Template as DjangoTemplate, Context

from seedorf.emails.templates import templates, Template

default_template_fields = {
    "product_name": "SportySpots",
    "product_url": "https://www.sportyspots.com",
    "support_email": "info@sportyspots.com",
    "sender_name": "SportySpots",
    "company_name": "SportySpots",
    "company_address": "Amsterdam, The Netherlands",
}


class TemplatedEmail(EmailMultiAlternatives):
    def __init__(self, template_id: Template=None, merge_global_data=None, language='en', **kwargs):
        self.template_id = template_id
        self.language = language
        self.merge_global_data = {**default_template_fields}
        self.merge_global_data.update(merge_global_data or {})
        super().__init__(**kwargs)

    def is_templated(self):
        return self.template_id is not None

    def should_self_render(self):
        return self.is_templated() and (settings.EMAIL_FORCE_SELF_RENDER or settings.EMAIL_BACKEND != 'anymail.backends.postmark.EmailBackend')

    def send(self, fail_silently=False):
        self._render()
        return super().send(fail_silently)

    def _render(self):
        if not self.should_self_render():
            # send through postmark, let them render
            # get right postmark template_id according to language
            self.template_id = templates[self.template_id.value][self.language]
        else:
            # render self
            html_template_filename = f"{self.template_id.value}-{self.language.upper()}.html"
            text_template_filename = f"{self.template_id.value}-{self.language.upper()}.txt"
            with open(os.path.join(settings.ROOT_DIR, 'seedorf', 'templates', 'emails', html_template_filename)) as file:
                html_template = file.read()
            with open(os.path.join(settings.ROOT_DIR, 'seedorf', 'templates', 'emails', text_template_filename)) as file:
                text_template = file.read()
            self.attach_alternative(DjangoTemplate(html_template).render(Context(self.merge_global_data)), "text/html")
            self.attach_alternative(DjangoTemplate(text_template).render(Context(self.merge_global_data)), "text/plain")
            self.subject = ''
            del self.template_id
            del self.language
            del self.merge_global_data

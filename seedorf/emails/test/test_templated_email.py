from test_plus.test import TestCase
from django.core import mail
from seedorf.emails.templates import Template
from seedorf.emails.templated_email import TemplatedEmail


class TestMail(TestCase):
    def test_render(self):
        email = TemplatedEmail(template_id=Template.SignupMagicLink, merge_global_data={'name': "tom"}, language='nl', to=['tomklav@gmail.com'])
        email.send()
        self.assertTrue('tom' in mail.outbox[0].alternatives[0][0])
        self.assertTrue('tom' in mail.outbox[0].alternatives[1][0])

# When using Postmark for email, you just set `template_id` and have body=None and subject=None
# This will crash when using a SMTP backend. This class fixes this behaviour by setting a body+subject
from django.core.mail.backends.smtp import EmailBackend
class LocalPostmarkEmailBackend(EmailBackend):
    def _send(self, email_message):
        message = email_message
        if message.template_id and message.body is None and message.subject is None:
            message.subject = "Postmark template #%s" % message.template_id
            message.body = """
Message template: %s,

Context: %s            
""" % (message.template_id, str(message.merge_global_data))
        super()._send(message)

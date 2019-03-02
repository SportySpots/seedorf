from django.core.mail import EmailMultiAlternatives
from django.template.loader import get_template


def send_mail(to, template_prefix, subject="", language="en", context=None):
    html_template = get_template(f"emails/{template_prefix}-{language}.html")
    text_template = get_template(f"emails/{template_prefix}-{language}.txt")

    email_plain_text = text_template.render(context if context else {})
    email_html = html_template.render(context if context else {})

    msg = EmailMultiAlternatives(
        subject=subject,
        body=email_html,
        from_email="SportySpots <info@sportyspots.com>",
        to=[f"{to}"],
        reply_to=["SportySpots <info@sportyspots.com>"],
    )

    msg.content_subtype = "html"  # Main content is now text/html
    msg.attach_alternative(email_plain_text, "text/plain")

    # Optional Anymail extensions:
    msg.tags = ["activation"]
    msg.track_clicks = True
    msg.track_opens = True

    # Send it:
    msg.send()

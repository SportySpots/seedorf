from django import template
from django.template.defaultfilters import stringfilter

register = template.Library()


@register.filter
@stringfilter
def imgix_url(value):
    if value.startswith("https://s3.amazonaws.com/sportyspots-prd"):
        return value.replace("https://s3.amazonaws.com/sportyspots-prd", "https://sportyspots.imgix.net")
    return value

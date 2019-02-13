import urllib

import requests
from django.conf import settings


def get_firebase_link(app_link):
    # https://firebase.google.com/docs/reference/dynamic-links/link-shortener
    # https://firebase.google.com/docs/dynamic-links/create-manually
    firebase_url = f"https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key={settings.FIREBASE_WEB_API_KEY}"
    long_dynamic_link_base = "https://sportyspots.page.link/?"
    long_dynamic_link_args = {
        "link": f"https://link.sportyspots.com/{app_link}",
        "apn": "com.sportyspots.android",
        "afl": "https://www.sportyspots.com",
        "ibi": "com.sportyspots.ios",
        "ifl": "https://www.sportyspots.com",
        "ofl": "https://www.sportyspots.com",
    }
    long_dynamic_link_url = long_dynamic_link_base + urllib.parse.urlencode(long_dynamic_link_args)
    post_body = {
        "longDynamicLink": long_dynamic_link_url,
        "suffix": {"option": "UNGUESSABLE"},
    }
    result = requests.post(firebase_url, json=post_body)
    return result.json()["shortLink"]

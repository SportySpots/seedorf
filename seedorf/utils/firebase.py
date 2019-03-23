import urllib

import requests
from django.conf import settings


def get_firebase_link(app_link, unguessable=True, **kwargs):
    # REF: https://firebase.google.com/docs/reference/dynamic-links/link-shortener
    # REF: https://firebase.google.com/docs/dynamic-links/create-manually
    firebase_url = f"https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key={settings.FIREBASE_WEB_API_KEY}"
    long_dynamic_link_base = "https://sportyspots.page.link/?"
    long_dynamic_link_args = {
        "link": f"https://app.sportyspots.com/{app_link}",
        "apn": "com.sportyspots.android",
        "ibi": "com.sportyspots.ios",
        "afl": "https://play.google.com/store/apps/details?id=com.sportyspots.android",
        "ifl": "https://itunes.apple.com/nl/app/sportyspots/id1391625376",
        "ofl": "https://www.sportyspots.com",
    }
    long_dynamic_link_args.update(kwargs)
    long_dynamic_link_url = long_dynamic_link_base + urllib.parse.urlencode(long_dynamic_link_args)
    post_body = {
        "longDynamicLink": long_dynamic_link_url,
        "suffix": {"option": "UNGUESSABLE" if unguessable else "SHORT"},
    }
    result = requests.post(firebase_url, json=post_body)
    return result.json()["shortLink"]

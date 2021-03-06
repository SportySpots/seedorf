"""
Local settings

- Run in Debug mode
- Use mailhog for emails
- Add Django Debug Toolbar
- Add django-extensions as app
"""

import socket
import os

from .base import *  # noqa

# DEBUG
# ------------------------------------------------------------------------------
DEBUG = env.bool("DJANGO_DEBUG", default=True)
TEMPLATES[0]["OPTIONS"]["debug"] = DEBUG

# SECRET CONFIGURATION
# See: https://docs.djangoproject.com/en/dev/ref/settings/#secret-key
# Note: This key only used for development and testing.
# ------------------------------------------------------------------------------
SECRET_KEY = env("DJANGO_SECRET_KEY", default="u^*n1SI0y`_*xY0m)4t/AB$y~Ko:@~|mh^/qAP<daS+](8APRg")

ALLOWED_HOSTS = [
    "localhost",
    "0.0.0.0",
    "127.0.0.1",
    "10.0.3.2",
    "10.0.2.2",
    "host.docker.internal",
    "tom-dev.ngrok.io",
]

CORS_ORIGIN_WHITELIST = [
    "http://localhost:8000",
    "http://localhost:8080",
    "http://127.0.0.1:8000",
    "http://127.0.0.1:8080",
] + CORS_ORIGIN_WHITELIST

EMAIL_BACKEND = env("DJANGO_EMAIL_BACKEND", default="django.core.mail.backends.console.EmailBackend")

# Mail settings
# ------------------------------------------------------------------------------
EMAIL_PORT = 1025
EMAIL_HOST = env("EMAIL_HOST", default="mailhog")

# CACHING
# ------------------------------------------------------------------------------
CACHES = {"default": {"BACKEND": "django.core.cache.backends.locmem.LocMemCache", "LOCATION": ""}}

# django-debug-toolbar
# ------------------------------------------------------------------------------
MIDDLEWARE += ["debug_toolbar.middleware.DebugToolbarMiddleware"]
INSTALLED_APPS += ["debug_toolbar"]

INTERNAL_IPS = ["127.0.0.1", "10.0.2.2", "10.0.3.2"]

# tricks to have debug toolbar when developing with docker
if os.environ.get("USE_DOCKER") == "yes":
    try:
        ip = socket.gethostbyname(socket.gethostname())
        INTERNAL_IPS += [ip[:-1] + "1"]
    except socket.gaierror as err:
        # NOTE: Ignore error if developing simultaneously in docker and locally
        pass


DEBUG_TOOLBAR_CONFIG = {
    "DISABLE_PANELS": ["debug_toolbar.panels.redirects.RedirectsPanel"],
    "SHOW_TEMPLATE_CONTEXT": True,
}

# django-extensions
# ------------------------------------------------------------------------------
INSTALLED_APPS += ["django_extensions"]

# TESTING
# ------------------------------------------------------------------------------
TEST_RUNNER = "django.test.runner.DiscoverRunner"

# CELERY
# ------------------------------------------------------------------------------
# In development, all tasks will be executed locally by blocking until the task returns
CELERY_ALWAYS_EAGER = True


# Your local stuff: Below this line define 3rd party library settings
# ------------------------------------------------------------------------------
MEDIA_URL = "http://10.0.2.2:8000/static/media/"
MEDIA_ROOT = "./staticfiles/media"
ACCOUNT_DEFAULT_HTTP_PROTOCOL = "http"

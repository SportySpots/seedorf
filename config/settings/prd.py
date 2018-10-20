"""
Production Configurations

- Use WhiteNoise for serving static files
- Use Amazon's S3 for storing uploaded media
- Use mailgun to send emails
- Use Redis for cache
- Use sentry for error logging

"""

import logging
import os

import raven
import requests
from django.core.exceptions import ImproperlyConfigured
from requests.exceptions import ConnectionError
from structlog import configure, processors, stdlib, threadlocal

from .base import *  # noqa

# SECRET CONFIGURATION
# ------------------------------------------------------------------------------
# See: https://docs.djangoproject.com/en/dev/ref/settings/#secret-key
# Raises ImproperlyConfigured exception if DJANGO_SECRET_KEY not in os.environ
SECRET_KEY = env("DJANGO_SECRET_KEY")


# This ensures that Django will be able to detect a secure connection
# properly on Heroku.
SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")

# raven sentry client
# See https://docs.sentry.io/clients/python/integrations/django/
# ------------------------------------------------------------------------------
INSTALLED_APPS += ["raven.contrib.django.raven_compat"]

# Use Whitenoise to serve static files
# See: https://whitenoise.readthedocs.io/
# ------------------------------------------------------------------------------
WHITENOISE_MIDDLEWARE = ["whitenoise.middleware.WhiteNoiseMiddleware"]
MIDDLEWARE = WHITENOISE_MIDDLEWARE + MIDDLEWARE
RAVEN_MIDDLEWARE = ["raven.contrib.django.raven_compat.middleware.SentryResponseErrorIdMiddleware"]
MIDDLEWARE = RAVEN_MIDDLEWARE + MIDDLEWARE


# SECURITY CONFIGURATION
# See https://docs.djangoproject.com/en/dev/ref/middleware/#module-django.middleware.security
# and https://docs.djangoproject.com/en/dev/howto/deployment/checklist/#run-manage-py-check-deploy
# ------------------------------------------------------------------------------

# set this to 60 seconds and then to 518400 when you can prove it works
SECURE_HSTS_SECONDS = 60
SECURE_HSTS_INCLUDE_SUBDOMAINS = env.bool("DJANGO_SECURE_HSTS_INCLUDE_SUBDOMAINS", default=True)
SECURE_CONTENT_TYPE_NOSNIFF = env.bool("DJANGO_SECURE_CONTENT_TYPE_NOSNIFF", default=True)
SECURE_BROWSER_XSS_FILTER = True
SESSION_COOKIE_SECURE = True
SESSION_COOKIE_HTTPONLY = True
SECURE_SSL_REDIRECT = env.bool("DJANGO_SECURE_SSL_REDIRECT", default=True)
CSRF_COOKIE_SECURE = True
CSRF_COOKIE_HTTPONLY = True
X_FRAME_OPTIONS = "DENY"

# SITE CONFIGURATION
# Hosts/domain names that are valid for this site
# See https://docs.djangoproject.com/en/dev/ref/settings/#allowed-hosts
# ------------------------------------------------------------------------------
ALLOWED_HOSTS = env.list("DJANGO_ALLOWED_HOSTS", default=[".sportyspots.com"])
# AWS DYNAMIC ALLOWED HOSTS FOR ECS/ ELASTIC BEANSTALK
if env("CLOUD_PROVIDER", default=None) == "AWS":
    url = "http://169.254.169.254/latest/meta-data/local-ipv4"
    try:
        r = requests.get(url)
        instance_ip = r.text
        ALLOWED_HOSTS += [instance_ip]
    except ConnectionError:
        error_msg = "You can only run production settings on an AWS EC2 instance"
        raise ImproperlyConfigured(error_msg)


INSTALLED_APPS += ["gunicorn", "storages"]

AWS_ACCESS_KEY_ID = env("DJANGO_AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = env("DJANGO_AWS_SECRET_ACCESS_KEY")
AWS_STORAGE_BUCKET_NAME = env("DJANGO_AWS_STORAGE_BUCKET_NAME")
AWS_AUTO_CREATE_BUCKET = True
AWS_QUERYSTRING_AUTH = False

# AWS cache settings, don't change unless you know what you're doing:
AWS_EXPIRY = 60 * 60 * 24 * 7

# TODO See: https://github.com/jschneier/django-storages/issues/47
# Revert the following and use str after the above-mentioned bug is fixed in
# either django-storage-redux or boto
control = "max-age=%d, s-maxage=%d, must-revalidate" % (AWS_EXPIRY, AWS_EXPIRY)
AWS_HEADERS = {"Cache-Control": bytes(control, encoding="latin-1")}

# URL that handles the media served from MEDIA_ROOT, used for managing
# stored files.
MEDIA_URL = "https://s3.amazonaws.com/%s/" % AWS_STORAGE_BUCKET_NAME
DEFAULT_FILE_STORAGE = "storages.backends.s3boto3.S3Boto3Storage"

# Static Assets
# ------------------------------------------------------------------------------
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

# COMPRESSOR
# ------------------------------------------------------------------------------
COMPRESS_STORAGE = "storages.backends.s3boto3.S3Boto3Storage"
COMPRESS_URL = STATIC_URL
COMPRESS_ENABLED = env.bool("COMPRESS_ENABLED", default=True)

# EMAIL
# ------------------------------------------------------------------------------
DEFAULT_FROM_EMAIL = env("DJANGO_DEFAULT_FROM_EMAIL", default="SportySpots <hello@sportyspots.com>")
EMAIL_SUBJECT_PREFIX = env("DJANGO_EMAIL_SUBJECT_PREFIX", default="[SportySpots]")
SERVER_EMAIL = env("DJANGO_SERVER_EMAIL", default=DEFAULT_FROM_EMAIL)

# Anymail with Mailgun
# ------------------------------------------------------------------------------
INSTALLED_APPS += ["anymail"]
ANYMAIL = {"POSTMARK_SERVER_TOKEN": env("DJANGO_POSTMARK_API_KEY")}
EMAIL_BACKEND = "anymail.backends.postmark.EmailBackend"

# TEMPLATE CONFIGURATION
# See:
# https://docs.djangoproject.com/en/dev/ref/templates/api/#django.template.loaders.cached.Loader
# ------------------------------------------------------------------------------
TEMPLATES[0]["OPTIONS"]["loaders"] = [
    (
        "django.template.loaders.cached.Loader",
        ["django.template.loaders.filesystem.Loader", "django.template.loaders.app_directories.Loader"],
    )
]

# DATABASE CONFIGURATION
# ------------------------------------------------------------------------------
# Raises ImproperlyConfigured exception if DATABASE_URL not in os.environ
DATABASES["default"] = env.db("DATABASE_URL")


# CACHING
# ------------------------------------------------------------------------------
REDIS_LOCATION = "{0}/{1}".format(env("REDIS_URL", default="redis://127.0.0.1:6379"), 0)
# Heroku URL does not pass the DB number, so we parse it in
CACHES = {
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": REDIS_LOCATION,
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
            "IGNORE_EXCEPTIONS": True,  # mimics memcache behavior.
            # http://niwinz.github.io/django-redis/latest/#_memcached_exceptions_behavior
        },
    }
}

# Sentry Configuration
# ------------------------------------------------------------------------------
SENTRY_DSN = env("DJANGO_SENTRY_DSN")
SENTRY_CLIENT = env("DJANGO_SENTRY_CLIENT", default="raven.contrib.django.raven_compat.DjangoClient")
SENTRY_CELERY_LOGLEVEL = env.int("DJANGO_SENTRY_LOG_LEVEL", logging.INFO)
SENTRY_ENVIRONMENT = env("ENV")
SENTRY_RELEASE = raven.fetch_git_sha(os.path.abspath(ROOT_DIR))
RAVEN_CONFIG = {
    "CELERY_LOGLEVEL": env.int("DJANGO_SENTRY_LOG_LEVEL", logging.INFO),
    "DSN": SENTRY_DSN,
}

# Logging Configuration
# ------------------------------------------------------------------------------
LOGGING = {
    "version": 1,
    "disable_existing_loggers": True,
    "root": {"level": "WARNING", "handlers": ["sentry"]},
    "formatters": {
        "verbose": {"format": "%(levelname)s %(asctime)s %(module)s %(process)d %(thread)d %(message)s"},
        "json": {
            "format": "%(levelname)s %(asctime)s %(module)s %(process)d %(thread)d %(message)s",
            "class": "pythonjsonlogger.jsonlogger.JsonFormatter",
        },
    },
    "handlers": {
        "json": {"level": "INFO", "class": "logging.StreamHandler", "formatter": "json"},
        "sentry": {"level": "ERROR", "class": "raven.contrib.django.raven_compat.handlers.SentryHandler"},
        "console": {"level": "DEBUG", "class": "logging.StreamHandler", "formatter": "verbose"},
    },
    "loggers": {
        "django.db.backends": {"level": "ERROR", "handlers": ["json"], "propagate": False},
        "raven": {"level": "DEBUG", "handlers": ["json"], "propagate": False},
        "sentry.errors": {"level": "DEBUG", "handlers": ["json"], "propagate": False},
        "django.security.DisallowedHost": {"level": "ERROR", "handlers": ["json", "sentry"], "propagate": False},
    },
}

# REF: https://blog.sneawo.com/blog/2017/07/28/json-logging-in-python/
configure(
    context_class=threadlocal.wrap_dict(dict),
    logger_factory=stdlib.LoggerFactory(),
    wrapper_class=stdlib.BoundLogger,
    processors=[
        stdlib.filter_by_level,
        stdlib.add_logger_name,
        stdlib.add_log_level,
        stdlib.PositionalArgumentsFormatter(),
        processors.TimeStamper(fmt="iso"),
        processors.StackInfoRenderer(),
        processors.format_exc_info,
        processors.UnicodeDecoder(),
        stdlib.render_to_log_kwargs,
    ],
)

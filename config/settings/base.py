"""
Django settings for seedorf project.

For more information on this file, see
https://docs.djangoproject.com/en/dev/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/dev/ref/settings/
"""
import datetime

import environ
from django.utils.translation import ugettext_lazy as _
from django.urls import reverse_lazy

ROOT_DIR = environ.Path(__file__) - 3  # (seedorf/config/settings/base.py - 3 = seedorf/)
APPS_DIR = ROOT_DIR.path('seedorf')

# Load operating system environment variables and then prepare to use them
env = environ.Env()

# .env file, should load only in development environment
READ_DOT_ENV_FILE = env.bool('DJANGO_READ_DOT_ENV_FILE', default=False)

if READ_DOT_ENV_FILE:
    # Operating System Environment variables have precedence over variables defined in the .env file,
    # that is to say variables from the .env files will only be used if not defined
    # as environment variables.
    env_file = str(ROOT_DIR.path('.env'))
    print('Loading : {}'.format(env_file))
    env.read_env(env_file)
    print('The .env file has been loaded. See base.py for more information')

# APP CONFIGURATION
# ------------------------------------------------------------------------------
DJANGO_APPS = [
    # Default Django apps:
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.humanize',

    # Admin
    'django.contrib.admin',

    # Additional support for Full text search, JSONB Field, HSTORE Field
    'django.contrib.postgres',
    'django.contrib.gis',
]

THIRD_PARTY_APPS = [
    'rest_framework',  # rest framework
    'rest_framework.authtoken',  # http://www.django-rest-framework.org/api-guide/authentication/#tokenauthentication

    'rest_auth',  # django-rest-auth
    'rest_auth.registration',  # django-rest-auth

    'allauth',  # registration
    'allauth.account',  # registration
    'allauth.socialaccount',  # registration
    'allauth.socialaccount.providers.facebook',
    'allauth.socialaccount.providers.twitter',

    'crispy_forms',  # Form layouts
    'graphene_django',  # graphql
    'haystack',  # solr/elastic-search

    'django_countries',
    'timezone_field',
    'corsheaders',
    'drf_yasg',
]

# Apps specific for this project go here.
LOCAL_APPS = [
    # custom users app
    'seedorf.users.apps.UsersConfig',

    # Your stuff: custom apps go here
    'seedorf.games.apps.GamesConfig',
    'seedorf.locations.apps.LocationsConfig',
    'seedorf.sports.apps.SportsConfig',
    'seedorf.spots.apps.SpotsConfig',
    'seedorf.reactions.apps.ReactionsConfig',
]

# See: https://docs.djangoproject.com/en/dev/ref/settings/#installed-apps
INSTALLED_APPS = DJANGO_APPS + THIRD_PARTY_APPS + LOCAL_APPS


# CSRF CONFIGURATION
# ------------------------------------------------------------------------------
CSRF_COOKIE_SECURE = env.bool('DJANGO_CSRF_COOKIE_SECURE', default=True)
CSRF_TRUSTED_ORIGINS = env.list('DJANGO_CSRF_TRUSTED_ORIGINS', default=['.sportyspots.com'])
CSRF_COOKIE_DOMAIN = env.str('DJANGO_CSRF_COOKIE_DOMAIN', default='sportyspots.com')
CSRF_USE_SESSIONS = env.bool('DJANGO_CSRF_USE_SESSIONS', default=False)

# HEADERS CONFIGURATION
# ------------------------------------------------------------------------------
USE_X_FORWARDED_HOST = env.bool('DJANGO_USE_X_FORWARDED_HOST', default=False)

# MIDDLEWARE CONFIGURATION
# ------------------------------------------------------------------------------
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    # 'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    # 'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# MIGRATIONS CONFIGURATION
# ------------------------------------------------------------------------------
MIGRATION_MODULES = {
    'sites': 'seedorf.contrib.sites.migrations'
}

# DEBUG
# ------------------------------------------------------------------------------
# See: https://docs.djangoproject.com/en/dev/ref/settings/#debug
DEBUG = env.bool('DJANGO_DEBUG', False)

# FIXTURE CONFIGURATION
# ------------------------------------------------------------------------------
# See: https://docs.djangoproject.com/en/dev/ref/settings/#std:setting-FIXTURE_DIRS
FIXTURE_DIRS = (
    str(APPS_DIR.path('fixtures')),
)

# EMAIL CONFIGURATION
# ------------------------------------------------------------------------------
EMAIL_BACKEND = env('DJANGO_EMAIL_BACKEND', default='django.core.mail.backends.smtp.EmailBackend')

# MANAGER CONFIGURATION
# ------------------------------------------------------------------------------
# See: https://docs.djangoproject.com/en/dev/ref/settings/#admins
ADMINS = [
    ('Admin - SportySpots', 'admin@sportyspots.com'),
]

# See: https://docs.djangoproject.com/en/dev/ref/settings/#managers
MANAGERS = ADMINS

# DATABASE CONFIGURATION
# ------------------------------------------------------------------------------
# See: https://docs.djangoproject.com/en/dev/ref/settings/#databases
# Uses django-environ to accept uri format
# See: https://django-environ.readthedocs.io/en/latest/#supported-types
DATABASES = {
    'default': env.db('DATABASE_URL', default='postgis:///seedorf'),
}
DATABASES['default']['ENGINE'] = 'django.contrib.gis.db.backends.postgis'
DATABASES['default']['ATOMIC_REQUESTS'] = True


# GENERAL CONFIGURATION
# ------------------------------------------------------------------------------
# Local time zone for this installation. Choices can be found here:
# http://en.wikipedia.org/wiki/List_of_tz_zones_by_name
# although not all choices may be available on all operating systems.
# In a Windows environment this must be set to your system time zone.
TIME_ZONE = 'UTC'

# See: https://docs.djangoproject.com/en/dev/ref/settings/#language-code
LANGUAGE_CODE = 'en-us'

LANGUAGES = (
    ('en', _('English')),
    ('nl', _('Dutch')),
)

# See: https://docs.djangoproject.com/en/dev/ref/settings/#site-id
SITE_ID = 1

# See: https://docs.djangoproject.com/en/dev/ref/settings/#use-i18n
USE_I18N = True

# See: https://docs.djangoproject.com/en/dev/ref/settings/#use-l10n
USE_L10N = True

# See: https://docs.djangoproject.com/en/dev/ref/settings/#use-tz
USE_TZ = True

# TEMPLATE CONFIGURATION
# ------------------------------------------------------------------------------
# See: https://docs.djangoproject.com/en/dev/ref/settings/#templates
TEMPLATES = [
    {
        # See: https://docs.djangoproject.com/en/dev/ref/settings/#std:setting-TEMPLATES-BACKEND
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        # See: https://docs.djangoproject.com/en/dev/ref/settings/#template-dirs
        'DIRS': [
            str(APPS_DIR.path('templates')),
        ],
        'OPTIONS': {
            # See: https://docs.djangoproject.com/en/dev/ref/settings/#template-debug
            'debug': DEBUG,
            # See: https://docs.djangoproject.com/en/dev/ref/settings/#template-loaders
            # https://docs.djangoproject.com/en/dev/ref/templates/api/#loader-types
            'loaders': [
                'django.template.loaders.filesystem.Loader',
                'django.template.loaders.app_directories.Loader',
            ],
            # See: https://docs.djangoproject.com/en/dev/ref/settings/#template-context-processors
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.template.context_processors.i18n',
                'django.template.context_processors.media',
                'django.template.context_processors.static',
                'django.template.context_processors.tz',
                'django.contrib.messages.context_processors.messages',
                # Your stuff: custom template context processors go here
            ],
        },
    },
]

# See: http://django-crispy-forms.readthedocs.io/en/latest/install.html#template-packs
CRISPY_TEMPLATE_PACK = 'bootstrap4'

# STATIC FILE CONFIGURATION
# ------------------------------------------------------------------------------
# See: https://docs.djangoproject.com/en/dev/ref/settings/#static-root
STATIC_ROOT = str(ROOT_DIR('staticfiles'))

# See: https://docs.djangoproject.com/en/dev/ref/settings/#static-url
STATIC_URL = '/static/'

# See: https://docs.djangoproject.com/en/dev/ref/contrib/staticfiles/#std:setting-STATICFILES_DIRS
STATICFILES_DIRS = [
    str(APPS_DIR.path('static')),
]

# See: https://docs.djangoproject.com/en/dev/ref/contrib/staticfiles/#staticfiles-finders
STATICFILES_FINDERS = [
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
]

# MEDIA CONFIGURATION
# ------------------------------------------------------------------------------
# See: https://docs.djangoproject.com/en/dev/ref/settings/#media-root
MEDIA_ROOT = str(APPS_DIR('media'))

# See: https://docs.djangoproject.com/en/dev/ref/settings/#media-url
MEDIA_URL = '/media/'

# URL Configuration
# ------------------------------------------------------------------------------
ROOT_URLCONF = 'config.urls'

# See: https://docs.djangoproject.com/en/dev/ref/settings/#wsgi-application
WSGI_APPLICATION = 'config.wsgi.application'

# SLUGLIFIER
# ------------------------------------------------------------------------------
AUTOSLUG_SLUGIFY_FUNCTION = 'slugify.slugify'

# CELERY
# ------------------------------------------------------------------------------
INSTALLED_APPS += ['seedorf.taskapp.celery.CeleryConfig']
CELERY_BROKER_URL = env('CELERY_BROKER_URL', default='django://')
if CELERY_BROKER_URL == 'django://':
    CELERY_RESULT_BACKEND = 'redis://'
else:
    CELERY_RESULT_BACKEND = CELERY_BROKER_URL

# django-compressor
# ------------------------------------------------------------------------------
INSTALLED_APPS += ['compressor']
STATICFILES_FINDERS += ['compressor.finders.CompressorFinder']

# i18n nece settings
# REF: https://github.com/tatterdemalion/django-nece
# ------------------------------------------------------------------------------
TRANSLATIONS_DEFAULT = 'en_us'
TRANSLATIONS_MAP = {
    "en": "en_us",
    "nl": "nl_nl",
}

# Haystack - Elasticsearch / Solr Integration
# ------------------------------------------------------------------------------
HAYSTACK_CONNECTIONS = {
    'default': {
        'ENGINE': 'haystack.backends.simple_backend.SimpleEngine',
    },
}


# AUTHENTICATION/ AUTHORIZATION Settings -------------------------------------------------------------------------------

# Location of root django.contrib.admin URL, use {% url 'admin:index' %}
ADMIN_URL = r'^admin/'
LOGIN_URL = 'rest-auth:rest_login'

# Custom User Model
AUTH_USER_MODEL = 'users.User'

# PASSWORD STORAGE SETTINGS
# ------------------------------------------------------------------------------
# See https://docs.djangoproject.com/en/dev/topics/auth/passwords/#using-argon2-with-django
PASSWORD_HASHERS = [
    'django.contrib.auth.hashers.Argon2PasswordHasher',
    'django.contrib.auth.hashers.PBKDF2PasswordHasher',
    'django.contrib.auth.hashers.PBKDF2SHA1PasswordHasher',
    'django.contrib.auth.hashers.BCryptSHA256PasswordHasher',
    'django.contrib.auth.hashers.BCryptPasswordHasher',
]

# PASSWORD VALIDATION
# https://docs.djangoproject.com/en/dev/ref/settings/#auth-password-validators
# ------------------------------------------------------------------------------
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# AUTHENTICATION CONFIGURATION
# ------------------------------------------------------------------------------
AUTHENTICATION_BACKENDS = [
    # django
    'django.contrib.auth.backends.ModelBackend',

    # allauth
    'allauth.account.auth_backends.AuthenticationBackend',
]

# Django Rest Framework
# REF: http://www.django-rest-framework.org/api-guide/settings/
# ------------------------------------------------------------------------------
REST_FRAMEWORK = {
    # Use Django's standard `django.contrib.auth` permissions,
    # or allow read-only access for unauthenticated users.
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
        'rest_framework.authentication.BasicAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticatedOrReadOnly'
    ],
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.CursorPagination',
    'PAGE_SIZE': 20,
}

# JWT Authentication
# REF: http://getblimp.github.io/django-rest-framework-jwt/
# ------------------------------------------------------------------------------
JWT_AUTH = {
    'JWT_ALGORITHM': 'HS256',
    'JWT_ALLOW_REFRESH': False,
    'JWT_AUDIENCE': None,
    'JWT_AUTH_COOKIE': None,
    'JWT_AUTH_HEADER_PREFIX': 'JWT',
    'JWT_DECODE_HANDLER': 'rest_framework_jwt.utils.jwt_decode_handler',
    'JWT_ENCODE_HANDLER': 'rest_framework_jwt.utils.jwt_encode_handler',
    'JWT_EXPIRATION_DELTA': datetime.timedelta(days=365),
    'JWT_GET_USER_SECRET_KEY': None,
    'JWT_ISSUER': None,
    'JWT_LEEWAY': 0,
    'JWT_PAYLOAD_GET_USER_ID_HANDLER': 'rest_framework_jwt.utils.jwt_get_user_id_from_payload_handler',
    'JWT_PAYLOAD_HANDLER': 'seedorf.utils.auth.jwt_payload_handler',
    'JWT_PRIVATE_KEY': None,
    'JWT_PUBLIC_KEY': None,
    'JWT_REFRESH_EXPIRATION_DELTA': datetime.timedelta(days=365),
    'JWT_RESPONSE_PAYLOAD_HANDLER': 'rest_framework_jwt.utils.jwt_response_payload_handler',
    'JWT_SECRET_KEY': env('DJANGO_SECRET_KEY'),
    'JWT_VERIFY': True,
    'JWT_VERIFY_EXPIRATION': True,
}

# Django Rest Auth
# REF: https://django-rest-auth.readthedocs.io/en/latest/configuration.html
# ------------------------------------------------------------------------------
REST_AUTH_SERIALIZERS = {
    'LOGIN_SERIALIZER': 'rest_auth.serializers.LoginSerializer',
    'TOKEN_SERIALIZER': 'rest_auth.serializers.TokenSerializer',
    'JWT_SERIALIZER': 'rest_auth.serializers.JWTSerializer',
    'USER_DETAILS_SERIALIZER': 'seedorf.users.serializers.UserDetailsSerializer',
    'PASSWORD_RESET_SERIALIZER': 'rest_auth.serializers.PasswordResetSerializer',
    'PASSWORD_RESET_CONFIRM_SERIALIZER': 'rest_auth.serializers.PasswordResetConfirmSerializer',
    'PASSWORD_CHANGE_SERIALIZER': 'rest_auth.serializers.PasswordChangeSerializer'
}
REST_AUTH_REGISTER_SERIALIZERS = {
  'REGISTER_SERIALIZER': 'seedorf.users.serializers.RegisterSerializer'
}
REST_AUTH_TOKEN_MODEL = 'rest_framework.authtoken.models'
REST_AUTH_TOKEN_CREATOR = 'rest_auth.utils.default_create_token'
REST_SESSION_LOGIN = True
REST_USE_JWT = True
OLD_PASSWORD_FIELD_ENABLED = False
LOGOUT_ON_PASSWORD_CHANGE = True


# Allauth settings
# REF: https://django-allauth.readthedocs.io/en/latest/configuration.html
# ------------------------------------------------------------------------------
ACCOUNT_ADAPTER = 'seedorf.users.adapter.DefaultAccountAdapter'
ACCOUNT_AUTHENTICATED_LOGIN_REDIRECTS = False
ACCOUNT_AUTHENTICATION_METHOD = 'username_email'
ACCOUNT_CONFIRM_EMAIL_ON_GET = True
ACCOUNT_EMAIL_CONFIRMATION_ANONYMOUS_REDIRECT_URL = reverse_lazy('account_confirm_complete')
ACCOUNT_EMAIL_CONFIRMATION_AUTHENTICATED_REDIRECT_URL = reverse_lazy('account_confirm_complete')
ACCOUNT_EMAIL_CONFIRMATION_EXPIRE_DAYS = 3
ACCOUNT_EMAIL_CONFIRMATION_HMAC = True
ACCOUNT_EMAIL_REQUIRED = False
ACCOUNT_EMAIL_VERIFICATION = 'optional'
ACCOUNT_EMAIL_SUBJECT_PREFIX = '[SportySpots]'
ACCOUNT_DEFAULT_HTTP_PROTOCOL = 'https'
ACCOUNT_EMAIL_CONFIRMATION_COOLDOWN = 180
ACCOUNT_EMAIL_MAX_LENGTH = 254
ACCOUNT_FORMS = {
    'add_email': 'allauth.account.forms.AddEmailForm',
    'change_password': 'allauth.account.forms.ChangePasswordForm',
    'disconnect': 'allauth.socialaccount.forms.DisconnectForm',
    'login': 'allauth.account.forms.LoginForm',
    'reset_password': 'allauth.account.forms.ResetPasswordForm',
    'reset_password_from_key': 'allauth.account.forms.ResetPasswordKeyForm',
    'set_password': 'allauth.account.forms.SetPasswordForm',
    'signup': 'allauth.account.forms.SignupForm'
}
ACCOUNT_LOGIN_ATTEMPTS_LIMIT = 5
ACCOUNT_LOGIN_ATTEMPTS_TIMEOUT = 300
ACCOUNT_LOGIN_ON_EMAIL_CONFIRMATION = False
ACCOUNT_LOGOUT_ON_GET = False
ACCOUNT_LOGOUT_ON_PASSWORD_CHANGE = False
ACCOUNT_LOGIN_ON_PASSWORD_RESET = False
ACCOUNT_LOGOUT_REDIRECT_URL = '/'
ACCOUNT_PASSWORD_INPUT_RENDER_VALUE = False
ACCOUNT_PRESERVE_USERNAME_CASING = False
ACCOUNT_SESSION_REMEMBER = None
ACCOUNT_SIGNUP_EMAIL_ENTER_TWICE = False
ACCOUNT_SIGNUP_FORM_CLASS = None
ACCOUNT_SIGNUP_PASSWORD_ENTER_TWICE = True
ACCOUNT_TEMPLATE_EXTENSION = 'html'
ACCOUNT_USERNAME_BLACKLIST = []
ACCOUNT_UNIQUE_EMAIL = True
ACCOUNT_USER_MODEL_EMAIL_FIELD = 'email'
ACCOUNT_USER_MODEL_USERNAME_FIELD = 'username'
ACCOUNT_USERNAME_MIN_LENGTH = 1
ACCOUNT_USERNAME_REQUIRED = False
ACCOUNT_USERNAME_VALIDATORS = None
SOCIALACCOUNT_ADAPTER = 'allauth.socialaccount.adapter.DefaultSocialAccountAdapter'
SOCIALACCOUNT_AUTO_SIGNUP = True
SOCIALACCOUNT_EMAIL_VERIFICATION = ACCOUNT_EMAIL_VERIFICATION
SOCIALACCOUNT_EMAIL_REQUIRED = ACCOUNT_EMAIL_REQUIRED
SOCIALACCOUNT_FORMS = {}
SOCIALACCOUNT_PROVIDERS = {}
SOCIALACCOUNT_QUERY_EMAIL = ACCOUNT_EMAIL_REQUIRED
SOCIALACCOUNT_STORE_TOKENS = True


ACCOUNT_ALLOW_REGISTRATION = env.bool('DJANGO_ACCOUNT_ALLOW_REGISTRATION', True)
# ACCOUNT_ADAPTER = 'seedorf.users.adapters.AccountAdapter'
# SOCIALACCOUNT_ADAPTER = 'seedorf.users.adapters.SocialAccountAdapter'

# graphene djang extra settings
# REF: https://github.com/eamigo86/graphene-django-extras
# ------------------------------------------------------------------------------
GRAPHENE_DJANGO_EXTRAS = {
        'DEFAULT_PAGINATION_CLASS': 'graphene_django_extras.paginations.LimitOffsetGraphqlPagination',
        'DEFAULT_PAGE_SIZE': 20,
        'MAX_PAGE_SIZE': 50,
        'CACHE_ACTIVE': False,
        'CACHE_TIMEOUT': 300    # seconds
}

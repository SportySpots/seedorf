# Environment Dev
ENV=tst

# Database
DATABASE_URL=postgis://localhost/seedorf

# PostgreSQL
POSTGRES_HOST=postgres
POSTGRES_DATABASE=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=mysecretpass

# Docker Compose
USE_DOCKER=False

# Domain name, used by caddy
DOMAIN_NAME=sportyspots.com

# Web root url, used for generating absolute URLs
WEB_ROOT_URL=https://test.sportyspots.com

# General settings
DJANGO_READ_DOT_ENV_FILE=False
DJANGO_DEBUG=True
DJANGO_SECRET_KEY=sportyspots
DJANGO_SETTINGS_MODULE=config.settings.tst
DJANGO_ALLOWED_HOSTS=127.0.0.1
DJANGO_EMAIL_BACKEND=django.core.mail.backends.locmem.EmailBackend

DJANGO_CSRF_COOKIE_SECURE=False
DJANGO_CSRF_COOKIE_DOMAIN=127.0.0.1
DJANGO_CSRF_TRUSTED_ORIGINS=''

# AWS Settings
DJANGO_AWS_ACCESS_KEY_ID=
DJANGO_AWS_SECRET_ACCESS_KEY=
DJANGO_AWS_STORAGE_BUCKET_NAME=

# Used with email
DJANGO_POSTMARK_API_KEY=

# Security! Better to use DNS for this task, but you can use redirect
DJANGO_SECURE_SSL_REDIRECT=False

# django-allauth
DJANGO_ACCOUNT_ALLOW_REGISTRATION=True

CELERY_BROKER_URL=redis+socket:///var/run/redis/redis.sock?virtual_host=1
REDIS_URL=redis://redis:6379
MEMCACHED_URL=

COMPRESS_ENABLED=False

FIREBASE_WEB_API_KEY=

# django push notifications
FCM_API_KEY=
APNS_USE_SANDBOX=True

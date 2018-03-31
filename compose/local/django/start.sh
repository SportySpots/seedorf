#!/usr/bin/env bash

${ENV:?"Please set ENV non-empty"}

set -o errexit
set -o pipefail
set -o nounset

if [ "$ENV" == "dev" ]
then
    set -o xtrace
    python manage.py migrate
    python manage.py runserver_plus 0.0.0.0:8000
elif [ "$ENV" == "prd" ]
then
    python /app/manage.py collectstatic --noinput
    python /app/manage.py migrate
    /usr/local/bin/gunicorn config.wsgi -w 4 -b 0.0.0.0:8000 --log-level debug --chdir=/app
else
    echo "Invalid ENV variable"
    exit
fi

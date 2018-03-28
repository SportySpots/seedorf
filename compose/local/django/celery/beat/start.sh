#!/usr/bin/env bash

${ENV:?"Please set ENV non-empty"}

set -o errexit
set -o pipefail
set -o nounset

if [ "$ENV" == "dev" ]
then
    set -o xtrace
    rm -f './celerybeat.pid'
    celery -A seedorf.taskapp beat -l INFO
elif [ "$ENV" == "prd" ]
then
    celery -A seedorf.taskapp beat -l INFO
else
    echo "Invalid ENV variable"
    exit
fi

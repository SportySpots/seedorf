#!/usr/bin/env bash

${ENV:?"Please set ENV non-empty"}

set -o errexit
set -o pipefail
set -o nounset

if [ "$ENV" == "dev" ]
then
    set -o xtrace
fi

celery -A seedorf.taskapp worker -l INFO

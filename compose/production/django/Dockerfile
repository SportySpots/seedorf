FROM python:3.6.4


# TODO: see below, for non-root user
# REF: https://github.com/docker-library/redis/blob/master/4.0/Dockerfile
# REF: https://github.com/docker-library/postgres/blob/master/10/Dockerfile

#The ARG instruction defines a variable that users can pass at build-time to the builder with the docker build
# command using the --build-arg <varname>=<value> flag.
#The ENV instruction sets the environment variable <key> to the value <value>.
#The environment variables set using ENV will persist when a container is run from the resulting image.
# git log -1 --format="%H"
ARG GIT_COMMIT=unknown

# Use label schema to annotate the Dockerfile (http://label-schema.org/rc1/)
LABEL org.label-schema.schema-version="1.0.0-rc.1" \
      org.label-schema.name="sportyspots" \
      org.label-schema.description="Discover sporty spots near you." \
      org.label-schema.vcs-url="https://github.com/SportySpots/seedorf" \
      org.label-schema.version="0.1.0" \
      org.label-schema.vcs-ref=$GIT_COMMIT \
      org.label-schema.build-date="2017-07-01T00:00:00.00Z" \
      org.label-schema.vendor="SportySpots" \
      org.label-schema.url="https://sportyspots.com" \
      org.label-schema.usage="N/A e.g.:/usr/doc/app-usage.txt" \
      org.label-schema.docker.cmd="docker run -d -p 8000:8000 -v config.json:/etc/config.json myapp" \
      org.label-schema.docker.cmd.devel="docker run -d -p 8000:8000 -e ENV=DEV myapp" \
      org.label-schema.docker.cmd.test="docker run sportyspots" \
      org.label-schema.docker.debug="docker exec -it sportyspots /bin/bash" \
      org.label-schema.docker.cmd.help="docker exec -it sportyspots /bin/bash --help" \
      org.label-schema.docker.params="NO_THREADS=integer number of threads to launch"

ENV DEBIAN_FRONTEND=noninteractive \
    PYTHONUNBUFFERED=1

RUN groupadd -r django \
    && useradd -r -g django django

RUN apt-get update \
    && apt-get install --assume-yes --quiet --no-install-recommends \
                    binutils \
                    libproj-dev \
                    proj-bin \
                    proj-data \
                    python3-pyproj \
                    gdal-bin \
                    python-gdal \
                    libgeoip1 \
                    libgeos-dev \
    && rm --recursive --force /var/lib/apt/lists/* \
    && apt-get --assume-yes autoclean

# Pipfile.lock has to be pulled and installed here, otherwise caching won't work
COPY Pipfile.lock /Pipfile.lock
RUN pip install pipenv==9.0.2 && \
    pipenv install --deploy --system --three --ignore-pipfile

COPY ./compose/local/django/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
RUN chown django /entrypoint.sh

COPY ./compose/local/django/start.sh /start.sh
RUN chmod +x /start.sh
RUN chown django /start.sh

COPY ./compose/local/django/celery/worker/start.sh /start-celeryworker.sh
RUN chmod +x /start-celeryworker.sh

COPY ./compose/local/django/celery/beat/start.sh /start-celerybeat.sh
RUN chmod +x /start-celerybeat.sh

COPY . /app

RUN chown -R django /app

USER django

WORKDIR /app

EXPOSE 80

CMD ["/start.sh"]

ENTRYPOINT ["/entrypoint.sh"]

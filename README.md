# seedorf

[![Greenkeeper badge](https://badges.greenkeeper.io/SportySpots/seedorf.svg)](https://greenkeeper.io/)

## Introduction
Find sporty spots and sporty people near you.

[![Build Status](https://travis-ci.org/SportySpots/seedorf.svg?branch=master)](https://travis-ci.org/SportySpots/seedorf)


:License: MIT

## Requirements

* python = 3.6.4
* pipenv = 11.7.2
* docker = 
* docker-compose = 
* postgresql = 9.6.8

## Settings

Moved to settings_.

[settings](http://cookiecutter-django.readthedocs.io/en/latest/settings.html)

## Basic Commands

### Setting Up Your Users


* To create a **normal user account**, just go to Sign Up and fill out the form. Once you submit it, you'll see a "Verify Your E-mail Address" page. Go to your console to see a simulated email verification message. Copy the link into your browser. Now the user's email should be verified and ready to go.

* To create an **superuser account**, use this command::

```bash
$ python manage.py createsuperuser
```

For convenience, you can keep your normal user logged in on Chrome and your superuser logged in on Firefox (or similar), so that you can see how the site behaves for both kinds of users.

### Test coverage


To run the tests, check your test coverage, and generate an HTML coverage report::

```bash
$ coverage run manage.py test
$ coverage html
$ open htmlcov/index.html
```

### Running tests with py.test


```bash
$ py.test
```


## Live reloading and Sass CSS compilation

Moved to `Live reloading and SASS compilation`_.

[Live reloading and SASS compilation](http://cookiecutter-django.readthedocs.io/en/latest/live-reloading-and-sass-compilation.html)


### Celery


This app comes with Celery.

To run a celery worker:

```bash
cd seedorf
celery -A seedorf.taskapp worker -l info
```

Please note: For Celery's import magic to work, it is important *where* the celery commands are run. If you are in the same folder with *manage.py*, you should be right.


### Email Server


In development, it is often nice to be able to see emails that are being sent from your application. For that reason local SMTP server `MailHog`_ with a web interface is available as docker container.

[mailhog](https://github.com/mailhog/MailHog)

Container mailhog will start automatically when you will run all docker containers.
Please check `cookiecutter-django Docker documentation`_ for more details how to start all containers.

With MailHog running, to view messages that are sent by your application, open your browser and go to ``http://127.0.0.1:8025``


### Sentry

Sentry is an error logging aggregator service. You can sign up for a free account at  https://sentry.io/signup/?code=cookiecutter  or download and host it yourself.
The system is setup with reasonable defaults, including 404 logging and integration with the WSGI application.

You must set the DSN url in production.


## Deployment

The following details how to deploy this application.


### Docker


See detailed `cookiecutter-django Docker documentation`_.

[cookiecutter-django Docker documentation](http://cookiecutter-django.readthedocs.io/en/latest/deployment-with-docker.html)




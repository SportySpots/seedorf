# seedorf

[![Build Status](https://travis-ci.org/SportySpots/seedorf.svg?branch=master)](https://travis-ci.org/SportySpots/seedorf) [![Greenkeeper badge](https://badges.greenkeeper.io/SportySpots/seedorf.svg)](https://greenkeeper.io/) [![Updates](https://pyup.io/repos/github/SportySpots/seedorf/shield.svg)](https://pyup.io/repos/github/SportySpots/seedorf/) [![Python 3](https://pyup.io/repos/github/SportySpots/seedorf/python-3-shield.svg)](https://pyup.io/repos/github/SportySpots/seedorf/)

## Introduction
Find sporty spots and sporty people near you.

:License: MIT

## Requirements

* python = 3.6.4
* pipenv = 11.7.2
* docker = 
* docker-compose = 
* postgresql = 9.6.8
* terraform = v0.11.3

## Settings

Moved to settings_.

[settings](http://cookiecutter-django.readthedocs.io/en/latest/settings.html)


## Infrastructure

## Terraform

### Settings

Define the following environment variables
```bash
$ export TF_VAR_aws_root_access_key_id=XXX
$ export TF_VAR_aws_root_access_key_secret=XXX

```

### Initialize

Initialize terraform to download AWS provider plugin

```bash
$ cd terraform
$ terraform init
```

### Commands

## AWS Planning

### VPC by Region

| Region       | CIDR         | Start IP  | End IP        | Max IPs | Env |
|--------------|--------------|-----------|---------------|---------|-----|
| eu-central-1 | 10.0.0.0/16  | 10.0.0.0  | 10.0.255.255  | 65536   | PRD |
| eu-central-1 | 10.1.0.0/16  | 10.1.0.0  | 10.1.255.255  | 65536   | STG |
| eu-central-1 | 10.2.0.0/16  | 10.2.0.0  | 10.2.255.255  | 65536   | TST |
| eu-central-1 | 10.3.0.0/16  | 10.3.0.0  | 10.3.255.255  | 65536   | DEV |
| eu-west-1    | 10.10.0.0/16 | 10.10.0.0 | 10.10.255.255 | 65536   | PRD |
| eu-west-1    | 10.11.0.0/16 | 10.11.0.0 | 10.11.255.255 | 65536   | STG |
| eu-west-1    | 10.12.0.0/16 | 10.12.0.0 | 10.12.255.255 | 65536   | TST |
| eu-west-1    | 10.13.0.0/16 | 10.13.0.0 | 10.13.255.255 | 65536   | DEV |

### VPC Subnet by Availability Zone

| Region       | Availability Zone | CIDR          | Start IP   | End IP       | Total IPs | Env |
|--------------|-------------------|-------------- |----------- |------------- |-----------|-----|
| eu-central-1 | eu-central-1a     | 10.0.0.0/20   | 10.0.0.0   | 10.0.15.255  | 4096      | PRD |
| eu-central-1 | eu-central-1b     | 10.0.16.0/20  | 10.0.16.0  | 10.0.31.255  | 4096      | PRD |
| eu-central-1 | eu-central-1c     | 10.0.32.0/20  | 10.0.32.0  | 10.0.47.255  | 4096      | PRD |
| eu-central-1 | eu-central-1a     | 10.1.0.0/20   | 10.1.0.0   | 10.1.15.255  | 4096      | STG |
| eu-central-1 | eu-central-1b     | 10.1.16.0/20  | 10.1.16.0  | 10.1.31.255  | 4096      | STG |
| eu-central-1 | eu-central-1c     | 10.1.32.0/20  | 10.1.32.0  | 10.1.47.255  | 4096      | STG |
| eu-central-1 | eu-central-1a     | 10.2.0.0/20   | 10.2.0.0   | 10.2.15.255  | 4096      | TST |
| eu-central-1 | eu-central-1b     | 10.2.16.0/20  | 10.2.16.0  | 10.2.31.255  | 4096      | TST |
| eu-central-1 | eu-central-1c     | 10.2.32.0/20  | 10.2.32.0  | 10.2.47.255  | 4096      | TST |
| eu-central-1 | eu-central-1a     | 10.3.0.0/20   | 10.3.0.0   | 10.3.15.255  | 4096      | DEV |
| eu-central-1 | eu-central-1b     | 10.3.16.0/20  | 10.3.16.0  | 10.3.31.255  | 4096      | DEV |
| eu-central-1 | eu-central-1c     | 10.3.32.0/20  | 10.3.32.0  | 10.3.47.255  | 4096      | DEV |
| eu-west-1    | eu-west-1a        | 10.10.0.0/20  | 10.10.0.0  | 10.10.15.255 | 4096      | PRD |
| eu-west-1    | eu-west-1b        | 10.10.16.0/20 | 10.10.16.0 | 10.10.31.255 | 4096      | PRD |
| eu-west-1    | eu-west-1c        | 10.10.32.0/20 | 10.10.32.0 | 10.10.47.255 | 4096      | PRD |
| eu-west-1    | eu-west-1a        | 10.11.0.0/20  | 10.11.0.0  | 10.11.15.255 | 4096      | STG |
| eu-west-1    | eu-west-1b        | 10.11.16.0/20 | 10.11.16.0 | 10.11.31.255 | 4096      | STG |
| eu-west-1    | eu-west-1c        | 10.11.32.0/20 | 10.11.32.0 | 10.11.47.255 | 4096      | STG |
| eu-west-1    | eu-west-1a        | 10.12.0.0/20  | 10.12.0.0  | 10.12.15.255 | 4096      | TST |
| eu-west-1    | eu-west-1b        | 10.12.16.0/20 | 10.12.16.0 | 10.12.31.255 | 4096      | TST |
| eu-west-1    | eu-west-1c        | 10.12.32.0/20 | 10.12.32.0 | 10.12.47.255 | 4096      | TST |
| eu-west-1    | eu-west-1a        | 10.13.0.0/20  | 10.13.0.0  | 10.13.15.255 | 4096      | DEV |
| eu-west-1    | eu-west-1b        | 10.13.16.0/20 | 10.13.16.0 | 10.13.31.255 | 4096      | DEV |
| eu-west-1    | eu-west-1c        | 10.13.32.0/20 | 10.13.32.0 | 10.13.47.255 | 4096      | DEV |



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




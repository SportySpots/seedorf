# Ansible

Install to vagrant box by running:

$ ansible-galaxy install -r requirements.yml --ignore-errors
$ ansible-playbook -e database_dump=[path to db dump] -i development mijnstroom.yml


## Requirements

Ansible assumes a pre-installed Ubuntu server 16.04 LTS box with the following options:

    - LVM encryption of HD (password needs to be manually inserted on every boot)
    - Install security updates automatically
    - Install openssh server

## Setup

Install external roles
```bash
$ ansible-galaxy install -r requirements.yml --ignore-errors
```

List all hosts for a particular inventory
```bash
$ ansible -i inventories/dev all --list-hosts
```

Dry run playbook
```bash
$ ansible-playbook -i inventories/dev playbook_site.yml --check
```


Run playbook
```bash
$ ansible-playbook -i inventories/dev playbook_site.yml
```

Encrypt String
```bash
$ ansible-vault encrypt_string 'string_to_encrypt' --name 'django_sentry_dsn'
```

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

Decrypt String
```bash
echo '$ANSIBLE_VAULT;1.1;AES256
  37396335643234373123623238366363386561333030623363646438353364663766636437346636
  6566613238346334373263613161623334393762396530620a303465353435346633643862303930
  30313766333662353830383036363532316130383639346233666139653862643336373134313966
  3832373939326530620a353034236465363839383835626265353132383834623632643639393935
  38376663303736383838323539353833666666633665616433386630333165653161363632383966
  3337353236646134646633633164353265373437336434303134' | tr -d ' ' | ansible-vault decrypt && echo
```

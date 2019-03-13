from fabric import task
from invoke import run as local
from invoke.exceptions import Failure


@task
def pull_database(c):
    # REF: pipenv run fab --identity ansible/ssh_keys/private/aws_lightsail_ssh_sportyspots_admin.key --hosts ubuntu@prd.sportyspots.com --echo pull-database
    # NOTE: Fabric transperantly converts the underscores in task names to dashes

    local("dropdb --if-exists seedorf")
    local("createdb seedorf")

    try:
        local("createuser --login --superuser --createdb ubuntu")
    except Failure:
        pass

    local_dump = local("mktemp")
    remote_dump = c.run("mktemp")

    pg_dump = c.run(f"pg_dump seedorf | gzip > {remote_dump.stdout.strip()}")

    if pg_dump.ok:
        try:
            # Explicitly use scp since we don't allow sftp subsystem on our servers
            local(
                f"scp -i ansible/ssh_keys/private/aws_lightsail_ssh_sportyspots_admin.key ubuntu@{c.host}:{remote_dump.stdout.strip()} {local_dump.stdout.strip()}"
            )
            local(f"gunzip -c {local_dump.stdout.strip()} | psql seedorf")
        finally:
            c.run(f"rm {remote_dump.stdout.strip()}")
            local(f"rm {local_dump.stdout.strip()}")

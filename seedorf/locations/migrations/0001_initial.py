from django.contrib.postgres.operations import CreateExtension
from django.contrib.postgres.operations import HStoreExtension
from django.db import migrations


class Migration(migrations.Migration):

    operations = [
        CreateExtension('postgis'),
        CreateExtension('postgis_topology'),
        HStoreExtension(),
    ]

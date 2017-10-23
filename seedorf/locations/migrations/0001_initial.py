# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-23 10:35
from __future__ import unicode_literals

import uuid

import django.contrib.gis.db.models.fields
import django.contrib.postgres.fields.jsonb
import django.utils.timezone
from django.contrib.postgres.operations import CreateExtension, HStoreExtension
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        CreateExtension('postgis'),
        CreateExtension('postgis_topology'),
        HStoreExtension(),
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, verbose_name='Unique Identifier')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, editable=False, verbose_name='Created At')),
                ('modified_at', models.DateTimeField(auto_now=True, verbose_name='Modified At')),
                ('deleted_at', models.DateTimeField(blank=True, editable=False, null=True, verbose_name='Deleted At')),
                ('raw_address', models.CharField(max_length=255)),
                ('raw_response', django.contrib.postgres.fields.jsonb.JSONField(blank=True, help_text='Raw api response from the geocoder service. e.g. google maps')),
                ('geocoder', models.CharField(choices=[('google', 'Google'), ('bing', 'Bing'), ('open_street_maps', 'Open Street Maps'), ('here', 'Here Maps'), ('manual', 'Manual')], default='manual', help_text='Geocoder used to convert raw address into latlong coordinates.', max_length=25, null=True)),
                ('formatted_address', models.CharField(blank=True, max_length=255)),
                ('location', django.contrib.gis.db.models.fields.PointField(srid=4326)),
            ],
        ),
    ]

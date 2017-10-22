# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-20 14:06
from __future__ import unicode_literals

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models
import django.utils.timezone
import nece.managers
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Sport',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, verbose_name='Unique Identifier')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, editable=False, verbose_name='Created At')),
                ('modified_at', models.DateTimeField(auto_now=True, verbose_name='Modified At')),
                ('deleted_at', models.DateTimeField(blank=True, editable=False, null=True, verbose_name='Deleted At')),
                ('translations', django.contrib.postgres.fields.jsonb.JSONField(blank=True, null=True)),
                ('category', models.CharField(choices=[('basketball', 'Basketball'), ('beach_volleyball', 'Beach Volleyball'), ('bootcamp', 'Bootcamp'), ('boules', 'Boules'), ('fitness', 'Fitness'), ('others', 'Others'), ('skating', 'Skating'), ('soccer', 'Soccer'), ('tennis', 'Tennis')], default='others', max_length=50)),
                ('name', models.CharField(help_text='Name of the sub category of the sport (e.g. Soccer 5x5).', max_length=255, unique=True, verbose_name='Sport Name')),
            ],
            options={
                'verbose_name': 'Sport',
                'verbose_name_plural': 'Sports',
                'ordering': ('category', 'name'),
            },
            bases=(models.Model, nece.managers.TranslationMixin),
        ),
    ]

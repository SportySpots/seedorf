# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-20 14:06
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='created_at',
            field=models.DateTimeField(default=django.utils.timezone.now, editable=False, verbose_name='Created At'),
        ),
        migrations.AddField(
            model_name='user',
            name='deleted_at',
            field=models.DateTimeField(blank=True, editable=False, null=True, verbose_name='Deleted At'),
        ),
        migrations.AddField(
            model_name='user',
            name='modified_at',
            field=models.DateTimeField(auto_now=True, verbose_name='Modified At'),
        ),
        migrations.AddField(
            model_name='user',
            name='uuid',
            field=models.UUIDField(default=uuid.uuid4, editable=False, verbose_name='Unique Identifier'),
        ),
    ]

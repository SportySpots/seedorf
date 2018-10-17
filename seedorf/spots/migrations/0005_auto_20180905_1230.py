# -*- coding: utf-8 -*-
# Generated by Django 1.11.12 on 2018-09-05 12:30
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("spots", "0004_auto_20180602_2110")]

    operations = [
        migrations.AlterField(
            model_name="spot",
            name="sports",
            field=models.ManyToManyField(
                blank=True,
                related_name="spots",
                to="sports.Sport",
                verbose_name="Sports",
            ),
        )
    ]

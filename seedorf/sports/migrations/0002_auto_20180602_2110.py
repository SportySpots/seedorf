# -*- coding: utf-8 -*-
# Generated by Django 1.11.12 on 2018-06-02 21:10
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [("sports", "0001_initial")]

    operations = [
        migrations.AlterModelOptions(
            name="sport",
            options={"ordering": ("-created_at",), "verbose_name": "Sport", "verbose_name_plural": "Sports"},
        )
    ]

# -*- coding: utf-8 -*-
# Generated by Django 1.11.12 on 2018-06-02 21:10
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [("games", "0003_game_description")]

    operations = [
        migrations.AlterModelOptions(
            name="game",
            options={
                "ordering": ("-created_at",),
                "verbose_name": "Game",
                "verbose_name_plural": "Games",
            },
        )
    ]

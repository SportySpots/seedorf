# -*- coding: utf-8 -*-
# Generated by Django 1.11.12 on 2018-05-02 08:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("games", "0001_initial")]

    operations = [
        migrations.AlterField(
            model_name="game",
            name="end_time",
            field=models.DateTimeField(
                blank=True, help_text="End time of the game in UTC.", null=True, verbose_name="End Time (UTC)"
            ),
        ),
        migrations.AlterField(
            model_name="game",
            name="rsvp_close_time",
            field=models.DateTimeField(
                blank=True,
                help_text="UTC time after that RSVPs will no longer be accepted, though organizers may close RSVPs earlier",
                null=True,
                verbose_name="RSVP Close Time (UTC)",
            ),
        ),
        migrations.AlterField(
            model_name="game",
            name="rsvp_open_time",
            field=models.DateTimeField(
                blank=True,
                help_text="UTC time before that RSVPs will no longer be accepted, though organizers may close RSVPs earlier",
                null=True,
                verbose_name="RSVP Open Time (UTC)",
            ),
        ),
        migrations.AlterField(
            model_name="game",
            name="start_time",
            field=models.DateTimeField(
                blank=True, help_text="Start time of the game in UTC.", null=True, verbose_name="Start Time (UTC)"
            ),
        ),
    ]

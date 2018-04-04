# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-04-04 12:13
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('games', '0002_auto_20171105_1955'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rsvpstatus',
            name='status',
            field=models.CharField(choices=[('accepted', 'Accepted'), ('attending', 'Attending'), ('checked_in', 'Checked In'), ('declined', 'Declined'), ('interested', 'Interested'), ('invited', 'Invited')], default=None, max_length=25, null=True, verbose_name='RSVP Status'),
        ),
    ]

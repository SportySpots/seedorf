# -*- coding: utf-8 -*-
# Generated by Django 1.11.12 on 2018-05-13 08:20
from __future__ import unicode_literals

from django.db import migrations, models
import seedorf.spots.models


class Migration(migrations.Migration):

    dependencies = [("spots", "0002_auto_20180513_0752")]

    operations = [
        migrations.AlterField(
            model_name="spotimage",
            name="image",
            field=models.ImageField(
                max_length=512,
                upload_to=seedorf.spots.models.get_images_upload_directory,
            ),
        )
    ]

# Generated by Django 2.1.3 on 2018-11-17 13:12

from django.db import migrations, models
import seedorf.users.models


class Migration(migrations.Migration):

    dependencies = [("users", "0004_auto_20180618_1608")]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="last_name",
            field=models.CharField(blank=True, max_length=150, verbose_name="last name"),
        ),
        migrations.AlterField(
            model_name="userprofile",
            name="avatar",
            field=models.ImageField(
                blank=True,
                null=True,
                upload_to=seedorf.users.models.get_avatar_upload_directory,
                verbose_name="Avatar Image",
            ),
        ),
    ]

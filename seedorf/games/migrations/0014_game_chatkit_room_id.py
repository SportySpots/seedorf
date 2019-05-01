# Generated by Django 2.1.2 on 2019-05-01 11:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("games", "0013_game_share_link")]

    operations = [
        migrations.AddField(
            model_name="game",
            name="chatkit_room_id",
            field=models.IntegerField(
                blank=True, null=True, help_text="ChatKit room ID.", verbose_name="ChatKit room ID"
            ),
            preserve_default=False,
        )
    ]

# Generated by Django 2.1.2 on 2019-04-24 09:43

from django.db import migrations, models


def set_share_links(apps, schema_editor):
    Game = apps.get_model("games", "Game")
    for game in Game.objects.all():
        # triggers signal to set share_link
        game.save()


class Migration(migrations.Migration):

    dependencies = [("games", "0012_update_game_default_ordering")]

    operations = [
        migrations.AddField(
            model_name="game",
            name="share_link",
            field=models.URLField(
                default="https://www.change.me",
                help_text="Shareable link (app/web) to this game.",
                max_length=80,
                verbose_name="Shareable link",
            ),
            preserve_default=False,
        ),
        migrations.RunPython(set_share_links),
    ]

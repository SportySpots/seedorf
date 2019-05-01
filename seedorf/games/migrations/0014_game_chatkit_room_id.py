# Generated by Django 2.1.2 on 2019-05-01 11:34

from django.db import migrations, models

from seedorf.chatkit.client import create_client


def create_chatkit_rooms(apps, schema_editor):
    client = create_client()
    client.token = client.create_admin_readonly_user_token()
    Game = apps.get_model('games', 'Game')
    for game in Game.objects.all():
        room = client.create_room(name=f'game/{str(game.uuid)}')
        game.chatkit_room_id = int(room['id'])
        game.save()


def create_chatkit_users(apps, schema_editor):
    from seedorf.chatkit.client import create_client
    client = create_client()
    User = apps.get_model('users', 'User')

    for user in User.objects.all():
        user_uuid = str(user.uuid)
        user_name = user.name
        user_avatar = str(user.profile.avatar)
        client.token = client.create_admin_token()
        client.create_user(
            user_uuid,
            user_name,
            user_avatar,
        )


class Migration(migrations.Migration):

    dependencies = [
        ('games', '0013_game_share_link'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='chatkit_room_id',
            field=models.IntegerField(blank=True, null=True, help_text='ChatKit room ID.', verbose_name='ChatKit room ID'),
            preserve_default=False,
        ),
        migrations.RunPython(create_chatkit_rooms),
        migrations.RunPython(create_chatkit_users),
    ]

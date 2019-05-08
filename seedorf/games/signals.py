from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver

from seedorf.chatkit.client import create_client
from seedorf.games.models import Game


@receiver(pre_save, sender=Game)
def update_share_link(sender, instance: Game, **kwargs):
    game = instance
    # if game changed to planned, or (not draft and important field changed).
    if game.status != Game.STATUS_DRAFT and (
        (game.tracker.has_changed("status") and game.status == Game.STATUS_PLANNED)
        or game.tracker.has_changed("description")
        or game.tracker.has_changed("name")
        or game.tracker.has_changed("spot")
    ):
        try:
            instance.share_link = instance.create_share_link()
        except Exception as e:
            pass


def create_chatkit_room_for_game(game: Game):
    client = create_client()
    client.token = client.create_admin_readonly_user_token()
    room = client.create_room(name=f"game/{str(game.uuid)}")
    game.chatkit_room_id = int(room["id"])
    game.save()


@receiver(post_save, sender=Game)
def create_chatkit_room(sender, instance: Game, created, **kwargs):
    if created:
        create_chatkit_room_for_game(instance)

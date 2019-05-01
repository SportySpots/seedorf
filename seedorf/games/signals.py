from django.db.models.signals import pre_save
from django.dispatch import receiver

from seedorf.games.models import Game


@receiver(pre_save, sender=Game)
def update_share_link(sender, instance: Game, **kwargs):
    instance.share_link = instance.create_share_link()

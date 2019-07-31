from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver

from .models import User, UserProfile


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()


def create_or_update_chatkit_user_for_user(user: User, created: bool = False):
    from seedorf.chatkit.client import create_client

    client = create_client()
    client.token = client.create_admin_token()
    user_uuid = str(user.uuid)
    user_name = user.name
    user_avatar = user.profile.avatar.url if user.profile.avatar else None
    if created:
        client.create_user(user_uuid, user_name, user_avatar)
    else:
        client.update_user(user_uuid, user_name, user_avatar)


@receiver(post_save, sender=User)
def create_or_update_chatkit_user(sender, instance, created, **kwargs):
    try:
        create_or_update_chatkit_user_for_user(instance, created)
    except Exception:
        pass


@receiver(post_delete, sender=User)
def delete_chatkit_user(sender, instance, **kwargs):
    try:
        from seedorf.chatkit.client import create_client

        client = create_client()
        client.token = client.create_admin_token()
        client.delete_user(str(instance.uuid))
    except Exception:
        pass

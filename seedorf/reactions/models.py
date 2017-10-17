from django.conf import settings
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db import models
from django.utils.translation import ugettext_lazy as _
from seedorf.utils.mixins import CommonModelPropertiesMixin


class ReactionsManager(models.Manager):
    use_for_related_fields = True

    def likes(self):
        return self.get_queryset().filter(reaction=Reaction.LIKE)

    def dislikes(self):
        return self.get_queryset().filter(reaction=Reaction.DISLIKE)

    def like_count(self):
        return self.get_queryset().filter(reaction=Reaction.LIKE).count()

    def dislike_count(self):
        return self.get_queryset().filter(reaction=Reaction.DISLIKE).count()

    def spots(self):
        return self.get_queryset().filter(content_type__model='spots').order_by('-spot_reactions__created_at')

    def sports(self):
        return self.get_queryset().filter(content_type__model='sports').order_by('-sport_reactions__created_at')


class Reaction(CommonModelPropertiesMixin):
    DISLIKE = 'dislike'
    LIKE = 'like'

    REACTIONS = (
        (DISLIKE, _('Dislike')),
        (LIKE, _('Like')),
    )

    reaction = models.CharField(
        blank=False,
        choices=REACTIONS,
        null=False,
        max_length=50,
        verbose_name=_('Reaction'),
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        verbose_name=_('User')
    )
    content_type = models.ForeignKey(
        ContentType,
        on_delete=models.CASCADE
    )
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey()

    objects = ReactionsManager()




from django.contrib.auth.models import AbstractUser
from django.core.urlresolvers import reverse
from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from django.utils.translation import ugettext_lazy as _

from seedorf.utils.models import BasePropertiesModel


@python_2_unicode_compatible
class User(AbstractUser, BasePropertiesModel):

    name = models.CharField(_('Name of User'), blank=True, max_length=255)

    def __str__(self):
        return self.email

    def get_absolute_url(self):
        return reverse('users:detail', kwargs={'uuid': self.uuid})


# class UserProfile(models.Model):
#     # gender
#     # is_under_age
#     # country
#     # language
#     # timezone
#     # company
#     # bio
#     # year of birth
#     # avatar
#     # gravatar_id
#     # two_factor_authentication
#     # plan
#     # blocks
#     # emails
#     # followers
#     pass

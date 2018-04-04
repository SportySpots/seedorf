from django.conf import settings
from hashids import Hashids


class HashSlugMixin:
    """
    NOTE: Updating the secret key would break all bookmarks
    NOTE: All objects of different classes with the same id will have the same hashid
    NOTE: Maybe its a better idea not to expose the ids via api or not enable retrieval of objects by id via api
    NOTE: Maybe only enable retrieval of objects using uuid
    """

    hasher = Hashids(salt=settings.SECRET_KEY, min_length=6)

    @property
    def hash_slug(self):
        return self.hasher.encode(self.id)

    def reverse_hash_slug(self, hash_slug):
        return self.hasher.decode(hash_slug)

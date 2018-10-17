import copy

from django.core.exceptions import ValidationError
from django.core.validators import BaseValidator
from django.utils.deconstruct import deconstructible
from django.utils.translation import ugettext_lazy as _
from jsonschema import validate


@deconstructible
class AllowedKeysValidator(object):
    """A validator designed for HStore to restrict keys."""

    messages = {"invalid_keys": _("Some keys were invalid: %(keys)s")}
    strict = False

    def __init__(self, keys, messages=None):
        self.keys = set(keys)
        if messages is not None:
            self.messages = copy.copy(self.messages)
            self.messages.update(messages)

    def __call__(self, value):
        keys = set(value.keys())
        disallowed_keys = keys - self.keys
        if disallowed_keys:
            raise ValidationError(
                self.messages["invalid_keys"],
                code="invalid_keys",
                params={"keys": ", ".join(disallowed_keys)},
            )

    def __eq__(self, other):
        return (
            isinstance(other, self.__class__)
            and self.keys == other.keys
            and self.messages == other.messages
            and self.strict == other.strict
        )

    def __ne__(self, other):
        return not (self == other)


class JSONSchemaValidator(BaseValidator):
    def compare(self, a, b):
        return validate(a, b)

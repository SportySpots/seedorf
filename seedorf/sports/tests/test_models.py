from test_plus.test import TestCase
from django.test import TransactionTestCase
from django.db.utils import IntegrityError
from django.db import transaction

from . import factories
from ..models import Sport


class TestSport(TestCase):
    def setUp(self):
        self.sport_soccer = factories.SportFactory(name="soccer", category=Sport.SOCCER)

    def test__str__(self):
        self.assertEqual(self.sport_soccer.__str__(), "soccer : soccer")


class TestSportUniqueness(TestCase):
    """
    NOTE: To avoid TransactionManagementError, we need to inherit from TransactionTestCase
    REF: https://stackoverflow.com/a/24589930/7574302
    """

    def setUp(self):
        self.sport_soccer = factories.SportFactory(category=Sport.SOCCER, name="soccer")

    def test_unique_name(self):
        with transaction.atomic(), self.assertRaises(IntegrityError):
            Sport.objects.create(category=Sport.SOCCER, name="soccer")

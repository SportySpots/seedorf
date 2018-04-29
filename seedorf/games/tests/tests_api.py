from datetime import timedelta

from django.core.urlresolvers import reverse
from django.utils import timezone
from rest_framework.test import APITestCase

from seedorf.users.tests.factories import UserFactory


class GameAPIViewTest(APITestCase):

    def setUp(self):
        user = UserFactory()
        self.client.force_authenticate(user=user)

    def test_game_create(self):
        url = reverse('game-list')
        now = timezone.now()
        rsvp_open_time = now + timedelta(days=1)
        rsvp_close_time = now + timedelta(days=1, hours=8)
        start_time = now + timedelta(days=2)
        end_time = now + timedelta(days=2, hours=8)
        data = {
            'name': 'test game',
            'rsvp_open_time': rsvp_open_time,
            'rsvp_close_time': rsvp_close_time,
            'start_time': start_time,
            'end_time': end_time
        }
        response = self.client.post(url, data, format='json')
        print(response.data)
        self.assertEqual(201, response.status_code)



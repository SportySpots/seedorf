from datetime import timedelta
from uuid import uuid4

from django.core.urlresolvers import reverse
from django.utils import timezone
from rest_framework.test import APITestCase

from seedorf.games.models import Game
from seedorf.sports.tests.factories import SportFactory
from seedorf.spots.models import Spot
from seedorf.spots.tests.factories import SpotFactory
from seedorf.sports.models import Sport
from .factories import GameFactory
from seedorf.users.tests.factories import UserFactory


class GameAPIViewTest(APITestCase):

    def setUp(self):
        self.user = UserFactory()
        self.client.force_authenticate(user=self.user)

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
        self.assertEqual(201, response.status_code)
        self.assertTrue(self.user.email, response.data['organizer']['email'])
        self.assertIsNone(response.data['sport'])
        self.assertIsNone(response.data['spot'])
        self.assertListEqual(response.data['attendees'], [])
        self.assertEqual(response.data['status'], 'planned')

    def test_empty_sport_assign(self):
        game = GameFactory()
        url = reverse('game-sport-list', kwargs={'game_uuid': str(game.uuid)})
        response = self.client.post(url, {}, format='json')
        self.assertEqual(400, response.status_code)

    def test_nonexistent_sport_assign(self):
        uuid = uuid4()
        game = GameFactory()
        data = {
            'uuid': str(uuid)
        }
        url = reverse('game-sport-list', kwargs={'game_uuid': str(game.uuid)})
        response = self.client.post(url, data, format='json')
        self.assertEqual(400, response.status_code)

    def test_invalid_sport_assign(self):
        game = GameFactory()
        sport = SportFactory()
        data = {
            'uuid': str(sport.uuid)
        }
        url = reverse('game-sport-list', kwargs={'game_uuid': str(game.uuid)})
        response = self.client.post(url, data, format='json')
        self.assertEqual(400, response.status_code)

    def test_valid_sport_assign(self):
        game = GameFactory(sport=None)
        sport = Sport.objects.filter(spots__uuid=game.spot.uuid).first()
        data = {
            'uuid': str(sport.uuid)
        }
        url = reverse('game-sport-list', kwargs={'game_uuid': str(game.uuid)})
        response = self.client.post(url, data, format='json')
        self.assertEqual(201, response.status_code)
        self.assertEqual(str(sport.uuid), response.data['uuid'])

        updated_game = Game.objects.get(uuid=game.uuid)
        self.assertEqual(sport.uuid, updated_game.sport.uuid)

    def test_empty_spot_assign(self):
        game = GameFactory()
        url = reverse('game-spot-list', kwargs={'game_uuid': str(game.uuid)})
        response = self.client.post(url, {}, format='json')
        self.assertEqual(400, response.status_code)

    def test_nonexistant_spot_assign(self):
        uuid = uuid4()
        game = GameFactory()
        data = {
            'uuid': str(uuid)
        }
        url = reverse('game-spot-list', kwargs={'game_uuid': str(game.uuid)})
        response = self.client.post(url, data, format='json')
        self.assertEqual(400, response.status_code)

    def test_invalid_spot_assign(self):
        game = GameFactory()
        spot = SpotFactory()
        data = {
            'uuid': str(spot.uuid)
        }
        url = reverse('game-spot-list', kwargs={'game_uuid': str(game.uuid)})
        response = self.client.post(url, data, format='json')
        self.assertEqual(400, response.status_code)

    def test_spot_valid_assign(self):
        game = GameFactory()
        spot = Spot.objects.filter(sports__uuid=game.sport.uuid).first()
        data = {
            'uuid': str(spot.uuid)
        }
        url = reverse('game-spot-list', kwargs={'game_uuid': str(game.uuid)})
        response = self.client.post(url, data, format='json')
        self.assertEqual(201, response.status_code)
        self.assertEqual(str(spot.uuid), response.data['uuid'])

        updated_game = Game.objects.get(uuid=game.uuid)
        self.assertEqual(spot.uuid, updated_game.spot.uuid)

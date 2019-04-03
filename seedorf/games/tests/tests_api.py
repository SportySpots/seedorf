from datetime import timedelta
from uuid import uuid4

from django.urls import reverse
from django.utils import timezone
from rest_framework.test import APITestCase

from seedorf.games.models import Game, RsvpStatus
from seedorf.sports.models import Sport
from seedorf.sports.tests.factories import SportFactory
from seedorf.spots.models import Spot
from seedorf.spots.tests.factories import SpotFactory
from seedorf.users.tests.factories import UserFactory
from .factories import GameFactory, RsvpStatusFactory
from django.core import mail


class GameAPIViewTest(APITestCase):
    def setUp(self):
        self.user = UserFactory()
        self.client.force_authenticate(user=self.user)

    def test_game_create(self):
        url = reverse("game-list")
        now = timezone.now()
        rsvp_open_time = now + timedelta(days=1)
        rsvp_close_time = now + timedelta(days=1, hours=8)
        start_time = now + timedelta(days=2)
        end_time = now + timedelta(days=2, hours=8)
        data = {
            "name": "test game",
            "rsvp_open_time": rsvp_open_time,
            "rsvp_close_time": rsvp_close_time,
            "start_time": start_time,
            "end_time": end_time,
        }
        response = self.client.post(url, data, format="json")
        self.assertEqual(201, response.status_code)
        self.assertTrue(self.user.email, response.data["organizer"]["email"])
        self.assertIsNone(response.data["sport"])
        self.assertIsNone(response.data["spot"])
        self.assertListEqual(response.data["rsvps"], [])
        self.assertEqual(response.data["status"], "draft")

    def test_game_create_set_status_error(self):
        url = reverse("game-list")
        now = timezone.now()
        rsvp_open_time = now + timedelta(days=1)
        rsvp_close_time = now + timedelta(days=1, hours=8)
        start_time = now + timedelta(days=2)
        end_time = now + timedelta(days=2, hours=8)
        data = {
            "name": "test game",
            "rsvp_open_time": rsvp_open_time,
            "rsvp_close_time": rsvp_close_time,
            "start_time": start_time,
            "end_time": end_time,
            "status": Game.STATUS_PLANNED,
        }
        response = self.client.post(url, data, format="json")
        self.assertEqual(400, response.status_code)
        self.assertIn("status", response.data.keys())

    def test_game_create_start_time_past_error(self):
        url = reverse("game-list")
        now = timezone.now()
        start_time = now + timedelta(days=-1)
        end_time = now + timedelta(days=2, hours=8)
        data = {"name": "test game", "start_time": start_time, "end_time": end_time}
        response = self.client.post(url, data, format="json")
        self.assertEqual(400, response.status_code)
        self.assertIn("start_time", response.data.keys())

    def test_game_create_end_time_past_error(self):
        url = reverse("game-list")
        now = timezone.now()
        start_time = now + timedelta(days=1)
        end_time = now + timedelta(days=-2, hours=8)
        data = {"name": "test game", "start_time": start_time, "end_time": end_time}
        response = self.client.post(url, data, format="json")
        self.assertEqual(400, response.status_code)
        self.assertIn("end_time", response.data.keys())

    def test_game_create_rsvp_open_time_past_error(self):
        url = reverse("game-list")
        now = timezone.now()
        rsvp_open_time = now + timedelta(days=-13)
        rsvp_close_time = now + timedelta(days=1, hours=8)
        start_time = now + timedelta(days=2)
        end_time = now + timedelta(days=2, hours=8)
        data = {
            "name": "test game",
            "rsvp_open_time": rsvp_open_time,
            "rsvp_close_time": rsvp_close_time,
            "start_time": start_time,
            "end_time": end_time,
        }
        response = self.client.post(url, data, format="json")
        self.assertEqual(400, response.status_code)
        self.assertIn("rsvp_open_time", response.data.keys())

    def test_game_create_rsvp_close_time_past_error(self):
        url = reverse("game-list")
        now = timezone.now()
        rsvp_open_time = now + timedelta(days=1)
        rsvp_close_time = now + timedelta(days=-1, hours=8)
        start_time = now + timedelta(days=2)
        end_time = now + timedelta(days=2, hours=8)
        data = {
            "name": "test game",
            "rsvp_open_time": rsvp_open_time,
            "rsvp_close_time": rsvp_close_time,
            "start_time": start_time,
            "end_time": end_time,
        }
        response = self.client.post(url, data, format="json")
        self.assertEqual(400, response.status_code)
        self.assertIn("rsvp_close_time", response.data.keys())

    def test_game_create_rsvp_close_set_error(self):
        url = reverse("game-list")
        now = timezone.now()
        rsvp_open_time = now + timedelta(days=1)
        rsvp_close_time = now + timedelta(days=1, hours=8)
        start_time = now + timedelta(days=2)
        end_time = now + timedelta(days=2, hours=8)
        data = {
            "name": "test game",
            "rsvp_open_time": rsvp_open_time,
            "rsvp_close_time": rsvp_close_time,
            "start_time": start_time,
            "end_time": end_time,
            "rsvp_closed": True,
        }
        response = self.client.post(url, data, format="json")
        self.assertEqual(400, response.status_code)
        self.assertIn("rsvp_closed", response.data.keys())

    def test_game_create_end_time_before_start_time_error(self):
        url = reverse("game-list")
        now = timezone.now()
        start_time = now + timedelta(days=2)
        end_time = now + timedelta(days=1, hours=12)
        data = {"name": "test game", "start_time": start_time, "end_time": end_time}
        response = self.client.post(url, data, format="json")
        self.assertEqual(400, response.status_code)

    def test_game_create_end_time_greater_than_twevle_hours_after_start_time_error(self):
        url = reverse("game-list")
        now = timezone.now()
        start_time = now + timedelta(days=2)
        end_time = now + timedelta(days=2, hours=14)
        data = {"name": "test game", "start_time": start_time, "end_time": end_time}
        response = self.client.post(url, data, format="json")
        self.assertEqual(400, response.status_code)

    def test_game_create_rsvp_open_time_after_start_time_error(self):
        url = reverse("game-list")
        now = timezone.now()
        rsvp_open_time = now + timedelta(days=2, hours=2)
        start_time = now + timedelta(days=2)
        end_time = now + timedelta(days=2, hours=8)
        data = {"name": "test game", "rsvp_open_time": rsvp_open_time, "start_time": start_time, "end_time": end_time}
        response = self.client.post(url, data, format="json")
        self.assertEqual(400, response.status_code)

    def test_game_create_rsvp_close_time_after_start_time_error(self):
        url = reverse("game-list")
        now = timezone.now()
        rsvp_close_time = now + timedelta(days=2, hours=13)
        start_time = now + timedelta(days=2)
        end_time = now + timedelta(days=2, hours=8)
        data = {"name": "test game", "rsvp_close_time": rsvp_close_time, "start_time": start_time, "end_time": end_time}
        response = self.client.post(url, data, format="json")
        self.assertEqual(400, response.status_code)

    def test_game_create_rsvp_close_time_before_rsvp_open_time_error(self):
        url = reverse("game-list")
        now = timezone.now()
        rsvp_open_time = now + timedelta(days=1, hours=8)
        rsvp_close_time = now + timedelta(days=1)
        start_time = now + timedelta(days=2)
        end_time = now + timedelta(days=2, hours=8)
        data = {
            "name": "test game",
            "rsvp_open_time": rsvp_open_time,
            "rsvp_close_time": rsvp_close_time,
            "start_time": start_time,
            "end_time": end_time,
        }
        response = self.client.post(url, data, format="json")
        self.assertEqual(400, response.status_code)
        self.assertIn("rsvp_close_time", response.data.keys())

    def test_empty_sport_assign(self):
        game = GameFactory()
        url = reverse("game-sport-list", kwargs={"game_uuid": str(game.uuid)})
        response = self.client.post(url, {}, format="json")
        self.assertEqual(400, response.status_code)

    def test_nonexistent_sport_assign(self):
        uuid = uuid4()
        game = GameFactory()
        data = {"uuid": str(uuid)}
        url = reverse("game-sport-list", kwargs={"game_uuid": str(game.uuid)})
        response = self.client.post(url, data, format="json")
        self.assertEqual(400, response.status_code)

    def test_invalid_sport_assign(self):
        game = GameFactory()
        sport = SportFactory()
        data = {"uuid": str(sport.uuid)}
        url = reverse("game-sport-list", kwargs={"game_uuid": str(game.uuid)})
        response = self.client.post(url, data, format="json")
        self.assertEqual(400, response.status_code)

    def test_valid_sport_assign(self):
        game = GameFactory(sport=None)
        sport = Sport.objects.filter(spots__uuid=game.spot.uuid).first()
        data = {"uuid": str(sport.uuid)}
        url = reverse("game-sport-list", kwargs={"game_uuid": str(game.uuid)})
        response = self.client.post(url, data, format="json")
        self.assertEqual(201, response.status_code)
        self.assertEqual(str(sport.uuid), response.data["uuid"])

        updated_game = Game.objects.get(uuid=game.uuid)
        self.assertEqual(sport.uuid, updated_game.sport.uuid)

    def test_empty_spot_assign(self):
        game = GameFactory()
        url = reverse("game-spot-list", kwargs={"game_uuid": str(game.uuid)})
        response = self.client.post(url, {}, format="json")
        self.assertEqual(400, response.status_code)

    def test_nonexistant_spot_assign(self):
        uuid = uuid4()
        game = GameFactory()
        data = {"uuid": str(uuid)}
        url = reverse("game-spot-list", kwargs={"game_uuid": str(game.uuid)})
        response = self.client.post(url, data, format="json")
        self.assertEqual(400, response.status_code)

    def test_invalid_spot_assign(self):
        game = GameFactory()
        spot = SpotFactory()
        data = {"uuid": str(spot.uuid)}
        url = reverse("game-spot-list", kwargs={"game_uuid": str(game.uuid)})
        response = self.client.post(url, data, format="json")
        self.assertEqual(400, response.status_code)

    def test_set_status_planned(self):
        game = GameFactory()
        data = {"status": "planned"}
        url = reverse("game-detail", kwargs={"uuid": str(game.uuid)})

        response = self.client.patch(url, data, format="json")
        self.assertEqual(200, response.status_code)

        # test emails
        self.assertEqual(len(mail.outbox), 1)
        self.assertEqual(mail.outbox[0].subject, "Your activity details")

    def test_valid_spot_assign(self):
        game = GameFactory()
        spot = Spot.objects.filter(sports__uuid=game.sport.uuid).first()
        data = {"uuid": str(spot.uuid)}
        url = reverse("game-spot-list", kwargs={"game_uuid": str(game.uuid)})
        response = self.client.post(url, data, format="json")
        self.assertEqual(201, response.status_code)
        self.assertEqual(str(spot.uuid), response.data["uuid"])

        updated_game = Game.objects.get(uuid=game.uuid)
        self.assertEqual(spot.uuid, updated_game.spot.uuid)

    def test_user_rsvp_initial(self):
        game = GameFactory()
        data = {"status": RsvpStatus.STATUS_ACCEPTED}
        url = reverse("game-rsvps-list", kwargs={"game_uuid": str(game.uuid)})
        response = self.client.post(url, data, format="json")
        self.assertEqual(201, response.status_code)

    def test_user_rsvp_update(self):
        rsvp = RsvpStatusFactory(user=self.user)
        data = {"status": RsvpStatus.STATUS_ATTENDING}

        url = reverse("game-rsvps-detail", kwargs={"game_uuid": str(rsvp.game.uuid), "uuid": str(rsvp.uuid)})

        response = self.client.put(url, data, format="json")
        self.assertEqual(200, response.status_code)

    def test_user_rsvp_error(self):
        rsvp = RsvpStatusFactory()
        data = {"status": RsvpStatus.STATUS_ATTENDING}

        url = reverse("game-rsvps-detail", kwargs={"game_uuid": str(rsvp.game.uuid), "uuid": str(rsvp.uuid)})
        response = self.client.put(url, data, format="json")
        self.assertEqual(400, response.status_code)

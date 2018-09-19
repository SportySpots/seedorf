import os
import tempfile

from PIL import Image
from django.core.urlresolvers import reverse
from rest_framework.test import APITestCase

from seedorf.locations.tests.factories import AddressFactory
from seedorf.sports.tests.factories import SportFactory
from seedorf.spots.tests.factories import SpotFactory, SpotImageFactory
from seedorf.users.tests.factories import SuperUserFactory


class SpotAPIViewTest(APITestCase):
    def setUp(self):
        user = SuperUserFactory()
        self.client.force_authenticate(user=user)

    def test_spot_list_retrieve(self):
        spot_1 = SpotFactory(name="spot 1")
        spot_2 = SpotFactory(name="spot 2")
        url = reverse("spot-list")
        response = self.client.get(url, format="json")

        self.assertEqual(200, response.status_code)
        self.assertEqual(response.data["count"], 2)
        self.assertEqual(len(response.data["results"]), 2)

    def test_spot_detail_retrieve(self):
        spot = SpotFactory(name="spot 1")
        url = reverse("spot-detail", kwargs={"uuid": str(spot.uuid)})
        response = self.client.get(url, format="json")
        self.assertEqual(200, response.status_code)
        self.assertEqual(response.data["address"]["uuid"], str(spot.address.uuid))
        self.assertTrue(response.data["sports"])
        self.assertEqual(response.data["name"], "spot 1")
        self.assertEqual(response.data["slug"], "spot-1")
        self.assertNotEqual(response.data["description"], "")
        self.assertEqual(response.data["is_temporary"], False)
        self.assertEqual(response.data["is_public"], True)
        self.assertEqual(response.data["is_permanently_closed"], False)
        self.assertFalse(response.data["is_verified"], False)
        self.assertNotEqual(response.data["homepage_url"], "")
        self.assertNotEqual(response.data["logo"], "")
        self.assertNotEqual(response.data["owner"], "")
        self.assertIsNone(response.data["establishment_date"])
        self.assertIsNone(response.data["closure_date"])
        self.assertIsNotNone(response.data["created_at"])
        self.assertIsNotNone(response.data["modified_at"])
        self.assertIsNone(response.data["deleted_at"])

    def test_spot_creation(self):
        url = reverse("spot-list")
        data = {"name": "spot 1", "description": "test description"}
        response = self.client.post(url, data, format="json")
        self.assertEqual(201, response.status_code)
        self.assertEqual(response.data["address"], None)
        self.assertEqual(response.data["sports"], [])
        self.assertEqual(response.data["name"], "spot 1")
        self.assertEqual(response.data["slug"], "spot-1")
        self.assertEqual(response.data["description"], "test description")
        self.assertEqual(response.data["closure_date"], None)
        self.assertEqual(response.data["establishment_date"], None)
        self.assertEqual(response.data["is_temporary"], False)
        self.assertEqual(response.data["is_public"], True)
        self.assertEqual(response.data["is_permanently_closed"], False)
        self.assertEqual(response.data["is_verified"], False)
        self.assertEqual(response.data["homepage_url"], "")
        self.assertEqual(response.data["logo"], None)
        self.assertEqual(response.data["owner"], "")
        self.assertEqual(response.data["deleted_at"], None)

    def test_spot_update(self):
        spot = SpotFactory(name="spot-1")
        url = reverse("spot-detail", kwargs={"uuid": str(spot.uuid)})
        data = {
            "name": "spot-2",
            "owner": "test owner",
            "description": "test description",
        }
        response = self.client.put(url, data, format="json")
        self.assertEqual(200, response.status_code)
        self.assertEqual(response.data["name"], "spot-2")
        # Make sure that the slug is not updated
        self.assertEqual(response.data["slug"], "spot-1")
        self.assertEqual(response.data["owner"], "test owner")
        self.assertEqual(response.data["description"], "test description")

    def test_address_create(self):
        spot = SpotFactory()
        url = reverse("spot-address-list", kwargs={"spot_uuid": str(spot.uuid)})
        data = {"lat": 52.0, "lng": 24.7, "raw_address": "1234 Amsterdam"}
        response = self.client.post(url, data, format="json")
        self.assertEqual(201, response.status_code)
        self.assertEqual(response.data["lat"], "52.000000000000000")
        self.assertEqual(response.data["lng"], "24.700000000000000")
        self.assertEqual(response.data["raw_address"], "1234 Amsterdam")

    def test_address_update(self):
        address = AddressFactory(raw_address="1234 Amsterdam")
        spot = SpotFactory(address=address)
        url = reverse(
            "spot-address-detail",
            kwargs={"spot_uuid": str(spot.uuid), "uuid": str(address.uuid)},
        )
        data = {"raw_address": "4321 Amsterdam"}
        response = self.client.put(url, data, format="json")
        self.assertEqual(200, response.status_code)
        self.assertTrue(response.data["raw_address"], "4321 Amsterdam")

    def test_sport_assign(self):
        spot = SpotFactory(sports=None)
        sport = SportFactory()
        url = reverse("spot-sports-list", kwargs={"spot_uuid": str(spot.uuid)})
        data = {"uuid": str(sport.uuid)}
        response = self.client.post(url, data, format="json")
        self.assertEqual(201, response.status_code)

    def test_image_create(self):
        spot = SpotFactory()

        with tempfile.NamedTemporaryFile(suffix=".jpg", delete=False) as tmp_file:
            image = Image.new("RGB", (100, 100), "#ddd")
            image.save(tmp_file, format="JPEG")
            tmp_file.close()

        url = reverse(
            "spot-sport-images-list",
            kwargs={
                "sport_uuid": str(str(spot.sports.all()[0].uuid)),
                "spot_uuid": str(spot.uuid),
            },
        )

        with open(tmp_file.name, "rb") as photo:
            data = {"image": photo}
            response = self.client.post(url, data, format="multipart")
            self.assertEqual(201, response.status_code)

        os.remove(tmp_file.name)

    def test_image_update(self):
        spot = SpotFactory()
        spot_image = SpotImageFactory(spot=spot, sport=spot.sports.all()[0])

        with tempfile.NamedTemporaryFile(suffix=".jpg", delete=False) as tmp_file:
            image = Image.new("RGB", (100, 100), "#ddd")
            image.save(tmp_file, format="JPEG")
            tmp_file.close()

        url = reverse(
            "spot-sport-images-detail",
            kwargs={
                "sport_uuid": str(str(spot.sports.all()[0].uuid)),
                "spot_uuid": str(spot.uuid),
                "uuid": str(spot_image.uuid),
            },
        )

        with open(tmp_file.name, "rb") as photo:
            data = {"image": photo}
            response = self.client.put(url, data, format="multipart")
            self.assertEqual(200, response.status_code)

        os.remove(tmp_file.name)

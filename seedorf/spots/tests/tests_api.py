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

    def test_spot_creation(self):
        url = reverse('spot-list')
        data = {
            'name': 'spot-1',
            'address': {
                'lat': '52.370216',
                'lng': '4.895168'
            }
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(201, response.status_code)

    def test_spot_update(self):
        spot = SpotFactory(name='spot-1')
        url = reverse('spot-detail', kwargs={'uuid': str(spot.uuid)})
        data = {
            'name': 'spot-2'
        }
        response = self.client.put(url, data, format='json')
        self.assertEqual(200, response.status_code)
        self.assertEqual(response.data['name'], 'spot-2')

    def test_address_create(self):
        spot = SpotFactory()
        url = reverse('spot-address-list', kwargs={'spot_uuid': str(spot.uuid)})
        data = {
            'raw_address': '1234 Amsterdam'
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(201, response.status_code)

    def test_address_update(self):
        address = AddressFactory(raw_address='1234 Amsterdam')
        spot = SpotFactory(address=address)
        url = reverse('spot-address-detail', kwargs={'spot_uuid': str(spot.uuid), 'uuid': str(address.uuid)})
        data = {
            'raw_address': '4321 Amsterdam'
        }
        response = self.client.put(url, data, format='json')
        self.assertEqual(200, response.status_code)
        self.assertTrue(response.data['raw_address'], '4321 Amsterdam')

    def test_sport_assign(self):
        spot = SpotFactory(sports=None)
        sport = SportFactory()
        url = reverse('spot-sports-list', kwargs={'spot_uuid': str(spot.uuid)})
        data = {
            'uuid': str(sport.uuid)
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(201, response.status_code)

    def test_image_create(self):
        spot = SpotFactory()

        with tempfile.NamedTemporaryFile(suffix='.jpg', delete=False) as tmp_file:
            image = Image.new('RGB', (100, 100), "#ddd")
            image.save(tmp_file, format="JPEG")
            tmp_file.close()

        url = reverse('spot-sport-images-list', kwargs={
            'sport_uuid': str(str(spot.sports.all()[0].uuid)),
            'spot_uuid': str(spot.uuid)
        })

        with open(tmp_file.name, 'rb') as photo:
            data = {
                'image': photo
            }
            response = self.client.post(url, data, format='multipart')
            self.assertEqual(201, response.status_code)

        os.remove(tmp_file.name)

    def test_image_update(self):
        spot = SpotFactory()
        spot_image = SpotImageFactory(spot=spot, sport=spot.sports.all()[0])

        with tempfile.NamedTemporaryFile(suffix='.jpg', delete=False) as tmp_file:
            image = Image.new('RGB', (100, 100), "#ddd")
            image.save(tmp_file, format="JPEG")
            tmp_file.close()

        url = reverse('spot-sport-images-detail', kwargs={
            'sport_uuid': str(str(spot.sports.all()[0].uuid)),
            'spot_uuid': str(spot.uuid),
            'uuid': str(spot_image.uuid)
        })

        with open(tmp_file.name, 'rb') as photo:
            data = {
                'image': photo
            }
            response = self.client.put(url, data, format='multipart')
            self.assertEqual(200, response.status_code)

        os.remove(tmp_file.name)



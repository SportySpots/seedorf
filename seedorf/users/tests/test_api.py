from django.core.urlresolvers import reverse
from rest_framework.test import APITestCase
import jwt
from django.conf import settings
from seedorf.users.models import User

from .factories import UserFactory


class UserRegistrationAPIViewTest(APITestCase):
    url = reverse('rest-auth-registration:rest_register')

    def test_user_creation(self):
        """
        Test to verify that a post call with user valid data
        """

        user_data = {
            "username": "test",
            "email": "test@example.com",
            "password1": "super_$secure_passw0rd",
            "password2": "super_$secure_passw0rd"
        }

        response = self.client.post(self.url, user_data)
        self.assertEqual(201, response.status_code)
        self.assertTrue("token" in response.data)

        user = User.objects.get(email=user_data['email'])
        decoded_token = jwt.decode(response.data['token'], settings.SECRET_KEY, algorithms=['HS256'])

        # Token contains the defined keys
        self.assertTrue({'user_id', 'uuid', 'email', 'username', 'exp'}.issubset(decoded_token))

        # Token has a the user with the right uuid
        self.assertEqual(decoded_token['uuid'], str(user.uuid))

    def test_duplicate_user_creation(self):
        """
        Test to verify that duplicate user creation is forbidden
        """
        UserFactory(username='test', email='test@example.com')

        user_data = {
            "username": "test",
            "email": "test@example.com",
            "password1": "super_$secure_passw0rd",
            "password2": "super_$secure_passw0rd"
        }

        response = self.client.post(self.url, user_data)
        self.assertEqual(400, response.status_code)

# Create Token Manually
# from rest_framework_jwt.settings import api_settings
#
# jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
# jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
#
# payload = jwt_payload_handler(user)
# token = jwt_encode_handler(payload)

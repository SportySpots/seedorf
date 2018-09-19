import jwt
from django.conf import settings
from django.core.urlresolvers import reverse
from rest_framework.test import APITestCase
from unittest.mock import patch

from seedorf.sports.tests.factories import SportFactory
from seedorf.spots.tests.factories import SpotFactory
from seedorf.users.adapters import AccountAdapter
from seedorf.users.models import User, UserProfile
from .factories import UserFactory, UserProfileFactory


class UserRegistrationAPIViewTest(APITestCase):
    url = reverse("rest-auth-registration:rest_register")

    def test_user_creation(self):
        """
        Test to verify that a post call with user valid data
        """

        user_data = {
            "first_name": "test create first name",
            "last_name": "test create last name",
            "username": "test_create@example.com",
            "email": "test_create@example.com",
            "password1": "super_$secure_passw0rd",
            "password2": "super_$secure_passw0rd",
        }

        with patch.object(AccountAdapter, "send_confirmation_mail", return_value=None):
            response = self.client.post(self.url, user_data)
            self.assertEqual(201, response.status_code)
            self.assertTrue("token" in response.data)

            user = User.objects.get(email=user_data["email"])
            decoded_token = jwt.decode(
                response.data["token"], settings.SECRET_KEY, algorithms=["HS256"]
            )
            response_user = response.data["user"]

            # Token contains the defined keys
            self.assertTrue(
                {"user_id", "uuid", "email", "username", "exp"}.issubset(decoded_token)
            )
            self.assertEqual(response_user["first_name"], user_data["first_name"])
            self.assertEqual(response_user["last_name"], user_data["last_name"])

            # Token has a the user with the right uuid
            self.assertEqual(decoded_token["uuid"], str(user.uuid))

    def test_duplicate_user_creation(self):
        """
        Test to verify that duplicate user creation is forbidden
        """
        UserFactory(username="test", email="test@example.com")

        user_data = {
            "username": "test",
            "email": "test@example.com",
            "password1": "super_$secure_passw0rd",
            "password2": "super_$secure_passw0rd",
        }

        response = self.client.post(self.url, user_data)
        self.assertEqual(400, response.status_code)


class UserProfileAPIViewTest(APITestCase):
    # TODO: Write test to test Avatar creation

    def test_user_profile_creation(self):
        user = UserFactory(username="test", email="test@example.com")
        self.client.force_authenticate(user=user)

        url = reverse("user-profile-list", kwargs={"user_uuid": str(user.uuid)})

        user_profile_data = {"year_of_birth": 1980}

        response = self.client.post(url, user_profile_data)
        self.assertEqual(201, response.status_code)
        self.assertEqual(response.data["sports"], [])
        self.assertEqual(response.data["spots"], [])
        self.assertEqual(response.data["gender"], UserProfile.GENDER_NOT_SPECIFIED)
        self.assertEqual(response.data["year_of_birth"], 1980)
        self.assertEqual(response.data["avatar"], None)
        self.assertEqual(response.data["language"], "en")
        self.assertEqual(response.data["timezone"], "Europe/Amsterdam")
        self.assertEqual(response.data["country"], "")
        self.assertEqual(response.data["bio"], "")
        self.assertCountEqual(
            [
                "uuid",
                "sports",
                "spots",
                "gender",
                "year_of_birth",
                "avatar",
                "language",
                "timezone",
                "country",
                "bio",
            ],
            response.data.keys(),
        )

    def test_user_profile_edit(self):
        sport = SportFactory()
        spot = SpotFactory(sports=[sport])

        user_profile = UserProfileFactory.create(spots=[spot], sports=[sport])

        self.client.force_authenticate(user=user_profile.user)

        url = reverse(
            "user-profile-detail",
            kwargs={
                "user_uuid": str(user_profile.user.uuid),
                "uuid": str(user_profile.uuid),
            },
        )

        user_profile_data = {"year_of_birth": 1981}

        response = self.client.put(url, user_profile_data)
        self.assertEqual(200, response.status_code)
        self.assertEqual(response.data["year_of_birth"], 1981)

    def test_user_profile_sport_retrieve(self):
        sport = SportFactory()
        spot = SpotFactory(sports=[sport])

        user_profile = UserProfileFactory.create(spots=[spot], sports=[sport])

        self.client.force_authenticate(user=user_profile.user)

        url = reverse(
            "user-profile-sports-list",
            kwargs={
                "user_uuid": str(user_profile.user.uuid),
                "profile_uuid": str(user_profile.uuid),
            },
        )

        response = self.client.get(url)
        self.assertEqual(200, response.status_code)

    def test_user_profile_spot_retrieve(self):
        sport = SportFactory()
        spot = SpotFactory(sports=[sport])

        user_profile = UserProfileFactory.create(spots=[spot], sports=[sport])

        self.client.force_authenticate(user=user_profile.user)

        url = reverse(
            "user-profile-spots-list",
            kwargs={
                "user_uuid": str(user_profile.user.uuid),
                "profile_uuid": str(user_profile.uuid),
            },
        )

        response = self.client.get(url)
        self.assertEqual(200, response.status_code)


# Create Token Manually
# from rest_framework_jwt.settings import api_settings
#
# jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
# jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
#
# payload = jwt_payload_handler(user)
# token = jwt_encode_handler(payload)

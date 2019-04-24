import time
import requests
import jwt
from django.conf import settings


# https://pusher.com/docs/chatkit/reference/api
# https://pusher.com/docs/chatkit/reference/api#endpoints
# https://pusher.com/docs/chatkit/authentication#token-provider-generate-a-token
from requests import HTTPError


class ChatkitClient:
    def __init__(
        self,
        instance_id: str,
        key_id: str,
        key_secret: str,
        base_url: str = 'https://us1.pusherplatform.io/services/chatkit/v3',
        jwt_expiration_time: int = 60*60*24*1,  # seems to be maximum

    ):
        self.instance_id = instance_id
        self.key_id = key_id
        self.key_secret = key_secret
        self.jwt_expiration_time = jwt_expiration_time
        self.base_url = base_url
        self.token = None

    def create_token(self, user_id=None, super_user=False):
        claims = {
            'instance': self.instance_id,
            'iss': f'api_keys/{self.key_id}',
            'iat': int(time.time()),
            'exp': int(time.time()) + self.jwt_expiration_time,
            'su': super_user,
        }
        if user_id:
            claims['sub'] = user_id

        return jwt.encode(
            claims,
            self.key_secret,
            algorithm='HS256'
        ).decode('utf-8')

    # create a JWT token for admin not associated with a user. Cannot create rooms.
    def create_admin_token(self):
        return self.create_token(None, True)

    # create an admin JWT token for readonly user
    def create_admin_readonly_user_token(self):
        return self.create_token('readonly', True)

    def headers(self):
        assert self.token, "Token needs to be set"
        return {'Authorization': f'Bearer {self.token}'}

    def get(self, url):
        response = requests.get(
            url=f'{self.base_url}/{self.instance_id}/{url}',
            headers=self.headers(),
        )
        if 200 < response.status_code < 300:
            return response.json()

        response.raise_for_status()


    def post(self, url, data):
        return requests.post(
            url=f'{self.base_url}/{self.instance_id}/{url}',
            json=data,
            headers=self.headers(),
        ).json()

    def get_user(self, user_id: str):
        return self.get(f'/users/{user_id}')

    def list_users(self):
        return self.get('/users')

    def create_user(self, id: str, name: str, avatar_url: str = None, custom_data: object = None):
        data = {
            'id': id,
            'name': name,
        }
        if avatar_url:
            data['avatar_url'] = avatar_url
        if custom_data:
            data['custom_data'] = custom_data

        return self.post('/users', data)

    def create_room(self, name: str = None, private=False, custom_data=None, user_ids=None):
        data = {}
        if name:
            data['name'] = name
        if private:
            data['private'] = True
        if custom_data:
            data['custom_data'] = custom_data
        if user_ids:
            data['user_ids'] = user_ids

        return self.post('/rooms', data)


def create_client():
    return ChatkitClient(
        settings.CHATKIT_SETTINGS['INSTANCE_ID'],
        settings.CHATKIT_SETTINGS['KEY_ID'],
        settings.CHATKIT_SETTINGS['KEY_SECRET'],
    )

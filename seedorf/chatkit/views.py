import jwt
from requests import HTTPError
from rest_framework.exceptions import NotAuthenticated
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from seedorf.chatkit.client import create_client


class ChatkitView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            user_uuid = str(request.user.uuid)
            avatar_url = str(request.user.profile.avatar)
            user_name = request.user.name
        else:
            user_uuid = 'readonly'
            avatar_url = ''
            user_name = 'readonly'

        client = create_client()
        client.token = client.create_admin_token()
        try:
            client.get_user(user_uuid)
        except HTTPError as e:
            if e.response.status_code == 404:
                client.create_user(
                    user_uuid,
                    user_name,
                    avatar_url,
                )

        token = client.create_token(user_uuid)
        claims = jwt.decode(token, verify=False)

        return Response({
            "access_token": token,
            "user_id": user_uuid,
            "token_type": "access_token",
            "expires_in": str(claims['exp'])
        })

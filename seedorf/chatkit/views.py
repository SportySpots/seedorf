import jwt
from requests import HTTPError
from rest_framework.exceptions import NotAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from seedorf.chatkit.client import create_client


class ChatkitView(APIView):
    def post(self, request, *args, **kwargs):
        if not request.user:
            return NotAuthenticated()

        user_uuid = str(request.user.uuid)

        client = create_client()
        client.token = client.create_admin_token()

        try:
            client.get_user(user_uuid)
        except HTTPError as e:
            if e.response.status_code == 404:
                client.create_user(
                    user_uuid,
                    request.user.name,
                    str(request.user.profile.avatar),
                )

        token = client.create_token(user_uuid)
        claims = jwt.decode(token, verify=False)

        return Response({
            "access_token": token,
            "user_id": user_uuid,
            "token_type": "access_token",
            "expires_in": str(claims['exp'])
        })

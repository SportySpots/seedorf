import jwt
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .client import create_client


class ChatkitView(APIView):
    permission_classes = (AllowAny,)

    @staticmethod
    def post(request, *args, **kwargs):
        if request.user.is_authenticated:
            user_uuid = str(request.user.uuid)
        else:
            user_uuid = "readonly"

        client = create_client()
        token = client.create_token(user_uuid)
        claims = jwt.decode(token, verify=False)

        return Response(
            {
                "access_token": token,
                "user_id": user_uuid,
                "token_type": "access_token",
                "expires_in": str(claims["exp"]),
            }
        )

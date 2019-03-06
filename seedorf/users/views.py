from django.utils.translation import ugettext_lazy as _
from rest_auth.utils import jwt_encode
from rest_framework import permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status

from seedorf.users.models import User, MagicLoginLink


@api_view()
def registration_null_view(request):
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view()
@permission_classes((permissions.AllowAny,))
def registration_status_view(request):
    return Response(_("Email account is activated"))


@api_view(["POST"])
@permission_classes((permissions.AllowAny,))
def create_magic_link_view(request):
    try:
        user = User.objects.get(email=request.data["email"])
    except User.DoesNotExist:
        return Response(_("Email not registered"), status=status.HTTP_404_NOT_FOUND)
    user.create_magic_link()
    user.magic_link.mail()
    return Response(_("Email sent"), status=status.HTTP_201_CREATED)


@api_view(["GET", "POST"])
@permission_classes((permissions.AllowAny,))
def confirm_magic_link_view(request):
    token = request.data.get("token")
    try:
        magic_link = MagicLoginLink.objects.get(token=token)
    except MagicLoginLink.DoesNotExist:
        return Response(_("Invalid token"), status=status.HTTP_400_BAD_REQUEST)

    return Response({"token": jwt_encode(magic_link.user)})

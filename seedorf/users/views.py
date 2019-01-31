from django.utils.translation import ugettext_lazy as _
from rest_auth.utils import jwt_encode
from rest_framework import permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.contrib.auth import login

from seedorf.users.models import User, MagicLoginLink


@api_view()
def registration_null_view(request):
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view()
@permission_classes((permissions.AllowAny,))
def registration_complete_view(request):
    return Response(_("Email account is activated"))


@api_view(["POST"])
@permission_classes((permissions.AllowAny,))
def create_magic_link_view(request):
    user = User.objects.filter(email=request.data["email"]).first()
    if not user:
        return Response(_("Email not registered"), 400)
    user.create_magic_link()
    return Response(_("Email sent"))


@api_view(["POST"])
@permission_classes((permissions.AllowAny,))
def confirm_magic_link_view(request):
    token = request.data.get("token")
    magic_link = MagicLoginLink.objects.filter(token=token).first()
    if not magic_link:
        return Response(_("Invalid token"), 400)
    return Response({"token": jwt_encode(magic_link.user)})

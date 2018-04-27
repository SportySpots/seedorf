from rest_framework import permissions
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response


@api_view()
def registration_null_view(request):
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view()
@permission_classes((permissions.AllowAny,))
def registration_complete_view(request):
    return Response("Email account is activated")

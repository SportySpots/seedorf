from django.test import Client
from django.views.generic import DetailView, ListView
from django_filters.views import FilterView
from datetime import timedelta
from django.utils import timezone
from factory.fuzzy import FuzzyText
from rest_auth.registration.views import RegisterView
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.test import APIRequestFactory

from seedorf.users.models import User
from .filters import GameWebFilter
from .models import Game, RsvpStatus


# REF: https://www.caktusgroup.com/blog/2018/10/18/filtering-and-pagination-django/
class FilteredListView(ListView):
    filterset_class = None

    def get_queryset(self):
        # Get the queryset however you usually would.  For example:
        queryset = super().get_queryset()
        # Then use the query parameters and the queryset to
        # instantiate a filterset and save it as an attribute
        # on the view instance for later.
        self.filterset = self.filterset_class(self.request.GET, queryset=queryset)
        # Return the filtered queryset
        return self.filterset.qs.distinct()

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # Pass the filterset to the template - it provides the form.
        context["filterset"] = self.filterset
        return context


class GameDetailView(DetailView):
    model = Game
    slug_field = "uuid"
    slug_url_kwarg = "uuid"
    template_name = "pages/website_game_detail.html"


class GameListView(FilteredListView):
    model = Game
    context_object_name = "games"
    template_name = "pages/website_game_list.html"
    filterset_class = GameWebFilter
    paginate_by = 5
    queryset = Game.objects.filter(
        status__in=[
            Game.STATUS_PLANNED,
            Game.STATUS_LIVE,
            Game.STATUS_STARTED,
            Game.STATUS_CANCELED,
            Game.STATUS_COMPLETED,
        ],
        start_time__gte=timezone.now() - timedelta(hours=1),
    )


@api_view(["POST"])
@permission_classes((permissions.AllowAny,))
def web_rsvp(request):
    email = request.data['email']
    name = request.data['name']
    gameUUID = request.data['game']

    game = None
    try:
        game = Game.objects.get(uuid=gameUUID)
    except Game.DoesNotExist:
        return Response("Game not found", status=status.HTTP_404_NOT_FOUND)

    user = None
    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        # There is no internal API for creating users, so using the REST api here.
        data = {
            'email': email,
            'name': name,
            'password': FuzzyText(length=20).fuzz()
        }
        client = Client()
        response = client.post("/api/auth/registration/", data, format='json')
        if response.status_code != 201:
            return Response(response.data, status=response.status_code)
        user = User.objects.get(email=email)

    rsvp = RsvpStatus.objects.create(game=game, user=user)

    if not game.attendees.filter(id=user.id).exists():
        game.attendees.add(rsvp)

    return Response("OK", status=status.HTTP_200_OK)

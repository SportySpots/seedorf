from django.views.generic import DetailView, ListView
from django_filters.views import FilterView

from .filters import GameWebFilter
from .models import Game


class GameDetailView(DetailView):
    model = Game
    slug_field = "uuid"
    slug_url_kwarg = "uuid"
    template_name = "pages/website_game_detail.html"


class GameListView(FilterView):
    model = Game
    context_object_name = "games"
    filterset_class = GameWebFilter
    template_name = "pages/website_game_list.html"

from django.views.generic import DetailView

from .models import Game


class GameDetailView(DetailView):
    model = Game
    slug_field = "uuid"
    slug_url_kwarg = "uuid"
    template_name = "pages/game_detail.html"

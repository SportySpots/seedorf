from django.views.generic import DetailView, ListView
from django_filters.views import FilterView
from datetime import timedelta
from django.utils import timezone

from .filters import GameWebFilter
from .models import Game


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
        start_time__gte=timezone.now() - timedelta(days=1),
    )

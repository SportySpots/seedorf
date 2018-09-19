from .models import Game, RsvpStatus

from django_filters import rest_framework as filters


class GameFilter(filters.FilterSet):
    class Meta:
        model = Game
        fields = {
            "organizer__uuid": ["exact"],
            "sport__uuid": ["exact"],
            "sport__category": ["exact"],
            "spot__uuid": ["exact"],
            "spot__name": ["exact", "icontains"],
            "name": ["exact", "icontains"],
            "start_time": ["lte", "gte"],
            "end_time": ["lte", "gte"],
            "rsvp_open_time": ["lte", "gte"],
            "rsvp_close_time": ["lte", "gte"],
            "rsvp_closed": ["exact"],
            "status": ["exact"],
            "invite_mode": ["exact"],
            "capacity": ["lte", "gte"],
            "show_remaining": ["exact"],
            "is_listed": ["exact"],
            "is_shareable": ["exact"],
            "is_featured": ["exact"],
        }


class RsvpStatusFilter(filters.FilterSet):
    class Meta:
        model = RsvpStatus
        fields = {"game__uuid": ["exact"], "user__uuid": ["exact"], "status": ["exact"]}

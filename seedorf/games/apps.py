from django.apps import AppConfig


class GamesConfig(AppConfig):
    name = "seedorf.games"
    verbose_name = "Games"

    def ready(self):
        from . import signals

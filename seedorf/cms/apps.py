from django.apps import AppConfig


class CmsConfig(AppConfig):
    name = "seedorf.cms"
    verbose_name = "Content Management System"

    def ready(self):
        try:
            import cms.signals  # noqa F401
        except ImportError:
            pass

from django.utils.translation import ugettext_lazy as _

from wagtail.core.models import Page
from wagtail.core.fields import StreamField
from wagtail.admin.edit_handlers import StreamFieldPanel

from .blocks import PageHomeStreamBlock


class PageHome(Page):
    # page fields
    body = StreamField(PageHomeStreamBlock(), blank=True, null=True)

    # wagtail fields
    template = "cms/page_home.html"

    # page hierarchy
    parent_page_types = ["wagtailcore.Page"]
    # subpage_types = ["cms.PageGeneric",]

    # panels
    content_panels = Page.content_panels + [StreamFieldPanel("body")]

    # NOTE: Allow creation of only one PageHome
    # REF: https://stackoverflow.com/questions/37167863/limit-homepage-via-parent-page-types-to-be-only-available-as-direct-child-of-roo  # noqa
    @classmethod
    def can_create_at(cls, parent: Page) -> bool:
        return super(PageHome, cls).can_create_at(parent) and not cls.objects.exists()

    class Meta:
        verbose_name = _("homepage")
        verbose_name_plural = _("homepages")

from django.utils.translation import ugettext_lazy as _
from wagtail.core.blocks import StreamBlock, CharBlock, StructBlock


class HeroHeaderBlock(StructBlock):
    heading = CharBlock(default="")
    sub_heading = CharBlock(default="")

    class Meta:
        classname = ""
        label = _("Hero Header")
        icon = "doc-empty"
        template = "cms/blocks/block_hero_header.html"


class PageHomeStreamBlock(StreamBlock):
    hero_header = HeroHeaderBlock()
    # advantages = AdvantagesBlock()
    # app_stores = AppStoresBlock()
    # contact_details = ContactDetailsBlock()
    # contact_form = ContactFormBlock()
    # icon_banner = IconBannerBlock()
    # newsletter = NewsletterBlock()
    # partners = PartnersBlock()
    # pricing = PricingBlock()
    # crowdfunding_campaigns_carousel = CrowdfundingCampaignsCarouselBlock()
    # screenshots = ScreenshotsBlock()
    # stats = StatsBlock()
    # steps_vertical = StepsVerticalBlock()
    # steps_horizontal = StepsHorizontalBlock()
    # team = TeamBlock()
    # user_quotes = UserQuotesBlock()
    # video_banner = VideoBannerBlock()

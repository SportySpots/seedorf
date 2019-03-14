from django.utils.translation import ugettext_lazy as _
from wagtail.core.blocks import StreamBlock, CharBlock, StructBlock, ChoiceBlock, TextBlock

from .block_choices import LINEAR_ICON_CHOICES, Background


class HeroHeaderBlock(StructBlock):
    heading = CharBlock(default="")
    sub_heading = CharBlock(default="")

    class Meta:
        classname = ""
        label = _("Hero Header")
        icon = "doc-empty"
        template = "cms/blocks/block_hero_header.html"


class IconBannerBlock(StructBlock):
    background = ChoiceBlock(
        choices=[(choice.value, choice.name) for choice in Background], default=Background.white.value
    )
    title = CharBlock()
    description = TextBlock()
    icon = ChoiceBlock(choices=LINEAR_ICON_CHOICES)

    class Meta:
        classname = ""
        label = _("Icon Banner")
        icon = "placeholder"
        template = "cms/blocks/block_banner_icon.html"


class IconFeaturesPromoBlock(StructBlock):
    background = ChoiceBlock(
        choices=[(choice.value, choice.name) for choice in Background], default=Background.white.value
    )
    title = CharBlock()
    description = TextBlock()

    class Meta:
        classname = ""
        label = _("Icon Features Promo")
        icon = "placeholder"
        template = "cms/blocks/block_icon_features_promo.html"


class VideoBannerBlock(StructBlock):
    background = ChoiceBlock(
        choices=[(choice.value, choice.name) for choice in Background], default=Background.white.value
    )
    title = CharBlock(default="", required=False)
    description = TextBlock(default="")
    youtube_video_id = CharBlock(default="")

    class Meta:
        classname = ""
        label = _("Video Banner")
        icon = "media"
        template = "cms/blocks/block_banner_video.html"


class AppDescriptionBlock(StructBlock):
    background = ChoiceBlock(
        choices=[(choice.value, choice.name) for choice in Background], default=Background.white.value
    )
    title = CharBlock(default="", required=False)
    description = TextBlock(default="")

    class Meta:
        classname = ""
        label = _("App Description Block")
        icon = "media"
        template = "cms/blocks/block_app_description.html"


class AppFeaturesBlock(StructBlock):
    background = ChoiceBlock(
        choices=[(choice.value, choice.name) for choice in Background], default=Background.white.value
    )
    title = CharBlock(default="", required=False)
    description = TextBlock(default="")

    class Meta:
        classname = ""
        label = _("App Features Block")
        icon = "media"
        template = "cms/blocks/block_app_features.html"


class AppStoresBlock(StructBlock):
    background = ChoiceBlock(
        choices=[(choice.value, choice.name) for choice in Background], default=Background.white.value
    )
    title = CharBlock(default="", required=False)
    description = TextBlock(default="")

    class Meta:
        classname = ""
        label = _("App Stores Block")
        icon = "media"
        template = "cms/blocks/block_app_stores.html"


class ContactBlock(StructBlock):
    background = ChoiceBlock(
        choices=[(choice.value, choice.name) for choice in Background], default=Background.white.value
    )
    title = CharBlock(default="", required=False)
    description = TextBlock(default="")

    class Meta:
        classname = ""
        label = _("Contact Block")
        icon = "media"
        template = "cms/blocks/block_contact.html"


class NewsletterBlock(StructBlock):
    background = ChoiceBlock(
        choices=[(choice.value, choice.name) for choice in Background], default=Background.white.value
    )
    title = CharBlock(default="", required=False)
    description = TextBlock(default="")

    class Meta:
        classname = ""
        label = _("Newsletter Block")
        icon = "media"
        template = "cms/blocks/block_newsletter.html"


class PressBlock(StructBlock):
    background = ChoiceBlock(
        choices=[(choice.value, choice.name) for choice in Background], default=Background.white.value
    )
    title = CharBlock(default="", required=False)
    description = TextBlock(default="")

    class Meta:
        classname = ""
        label = _("Press Block")
        icon = "media"
        template = "cms/blocks/block_press.html"


class StatsBlock(StructBlock):
    background = ChoiceBlock(
        choices=[(choice.value, choice.name) for choice in Background], default=Background.white.value
    )
    title = CharBlock(default="", required=False)
    description = TextBlock(default="")

    class Meta:
        classname = ""
        label = _("Stats Block")
        icon = "media"
        template = "cms/blocks/block_stats.html"


class TeamBlock(StructBlock):
    background = ChoiceBlock(
        choices=[(choice.value, choice.name) for choice in Background], default=Background.white.value
    )
    title = CharBlock(default="", required=False)
    description = TextBlock(default="")

    class Meta:
        classname = ""
        label = _("Team Block")
        icon = "media"
        template = "cms/blocks/block_team.html"


class UserQuotesBlock(StructBlock):
    background = ChoiceBlock(
        choices=[(choice.value, choice.name) for choice in Background], default=Background.white.value
    )
    title = CharBlock(default="", required=False)
    description = TextBlock(default="")

    class Meta:
        classname = ""
        label = _("User Quotes Block")
        icon = "media"
        template = "cms/blocks/block_user_quotes.html"


class PageHomeStreamBlock(StreamBlock):
    hero_header = HeroHeaderBlock()
    icon_banner = IconBannerBlock()
    video_banner = VideoBannerBlock()
    app_description = AppDescriptionBlock()
    app_features = AppFeaturesBlock()
    app_stores = AppStoresBlock()
    newsletter = NewsletterBlock()
    press = PressBlock()
    stats = StatsBlock()
    team = TeamBlock()
    user_quotes = UserQuotesBlock()
    contact = ContactBlock()
    icon_features_promo = IconFeaturesPromoBlock()

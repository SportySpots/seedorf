# -*- coding: utf-8 -*-
from django.conf import settings
from django.db import migrations


def create_homepage(apps, schema_editor):
    # Get models
    ContentType = apps.get_model("contenttypes.ContentType")
    Page = apps.get_model("wagtailcore.Page")
    Site = apps.get_model("wagtailcore.Site")
    PageHome = apps.get_model("cms.PageHome")

    # Delete the default homepage
    # If migration is run multiple times, it may have already been deleted
    Page.objects.filter(id=2).delete()

    # Create content type for homepage model
    homepage_content_type, __ = ContentType.objects.get_or_create(model="pagehome", app_label="cms")

    # Create a new homepage
    homepage = PageHome.objects.create(
        title="SportySpots",
        slug="home",
        content_type=homepage_content_type,
        path="00010001",
        depth=2,
        numchild=0,
        url_path="/home/",
    )

    Site.objects.update_or_create(
        id=settings.SITE_ID, hostname="sportyspots.com", root_page=homepage, is_default_site=True
    )


class Migration(migrations.Migration):

    dependencies = [("cms", "0001_initial")]

    operations = [migrations.RunPython(create_homepage)]

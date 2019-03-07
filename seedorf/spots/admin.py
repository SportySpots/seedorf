from django.contrib import admin

from .models import Spot, SpotAmenity, SpotImage, SpotOpeningTime


class SpotOpeningTimeAdmin(admin.StackedInline):
    model = SpotOpeningTime


class SpotImageAdmin(admin.StackedInline):
    model = SpotImage


class SpotAmenityAdmin(admin.StackedInline):
    model = SpotAmenity


class SpotAdmin(admin.ModelAdmin):
    search_fields = ["name"]
    readonly_fields = ("uuid", "created_at", "modified_at", "deleted_at")
    list_display = ("name", "owner", "is_verified", "is_permanently_closed", "is_public", "is_temporary", "modified_at")
    list_filter = ("sports__category", "is_verified", "is_public")
    inlines = [SpotImageAdmin, SpotOpeningTimeAdmin, SpotAmenityAdmin]
    fieldsets = (
        (
            None,
            {
                "fields": (
                    "uuid",
                    "name",
                    "slug",
                    "owner",
                    "address",
                    "description",
                    "logo",
                    "homepage_url",
                    "is_verified",
                    "is_permanently_closed",
                    "is_public",
                    "is_temporary",
                    "establishment_date",
                    "closure_date",
                    "sports",
                )
            },
        ),
        ("Audit", {"classes": ("collapse",), "fields": ("created_at", "modified_at", "deleted_at")}),
    )


admin.site.register(Spot, SpotAdmin)

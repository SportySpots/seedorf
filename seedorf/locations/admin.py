from django.contrib import admin

from .models import Address


class AddressAdmin(admin.ModelAdmin):
    search_fields = ("uuid", "formatted_address", "spot__name")
    list_display = ("uuid", "formatted_address", "lat", "lng")
    readonly_fields = ("uuid", "created_at", "modified_at", "deleted_at")
    fieldsets = (
        (None, {"fields": ("uuid", "formatted_address", "lat", "lng", "point")}),
        ("Raw Data", {"fields": ("geocoder_service", "raw_address", "raw_geocoder_response")}),
        ("Google Codes", {"fields": ("plus_global_code", "plus_local_code")}),
        ("Audit", {"classes": ("collapse",), "fields": ("created_at", "modified_at", "deleted_at")}),
    )


admin.site.register(Address, AddressAdmin)

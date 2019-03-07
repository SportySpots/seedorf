from django.contrib import admin

from .models import Sport


class SportAdmin(admin.ModelAdmin):
    readonly_fields = ("uuid", "created_at", "modified_at", "deleted_at")
    fields = ("uuid", "category", "name", "description", "translations", "created_at", "modified_at", "deleted_at")
    list_display = ("uuid", "category", "name")
    list_filter = ("category",)


admin.site.register(Sport, SportAdmin)

from django.contrib import admin

from .models import Game, RsvpStatus


class RsvpStatusAdmin(admin.TabularInline):
    model = RsvpStatus


class GameAdmin(admin.ModelAdmin):
    readonly_fields = ("uuid", "created_at", "modified_at", "deleted_at")
    list_display = ("uuid", "name", "sport", "status", "start_time", "end_time")
    list_filter = ("status", "invite_mode")
    search_fields = ("uuid", "name", "sport__name", "spot__name")
    inlines = [RsvpStatusAdmin]
    fieldsets = (
        (None, {"fields": ("uuid", "name", "organizer", "sport", "spot", "status", "capacity", "description")}),
        (
            "Activity Time",
            {"classes": ("expand",), "fields": ("start_time", "start_timezone", "end_time", "end_timezone")},
        ),
        ("RSVP Time", {"classes": ("collapse",), "fields": ("rsvp_open_time", "rsvp_close_time", "rsvp_closed")}),
        (
            "Visibility",
            {"classes": ("collapse",), "fields": ("show_remaining", "is_listed", "is_shareable", "is_featured")},
        ),
        ("Audit", {"classes": ("collapse",), "fields": ("created_at", "modified_at", "deleted_at")}),
    )


admin.site.register(Game, GameAdmin)

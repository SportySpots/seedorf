from django.contrib import admin

from .models import Game, RsvpStatus


class RsvpStatusAdmin(admin.TabularInline):
    model = RsvpStatus


class GameAdmin(admin.ModelAdmin):
    readonly_fields = ("uuid", "created_at", "modified_at")
    list_display = ("uuid", "name", "sport", "status", "start_time", "end_time")
    list_filter = ("status",)
    inlines = [RsvpStatusAdmin]


admin.site.register(Game, GameAdmin)

from django.contrib import admin

from .models import Game, RsvpStatus


class GameAdmin(admin.ModelAdmin):
    readonly_fields = ('uuid', 'created_at', 'modified_at',)
    list_display = ('uuid', 'name', 'start_time', 'end_time')


admin.site.register(Game, GameAdmin)
admin.site.register(RsvpStatus)

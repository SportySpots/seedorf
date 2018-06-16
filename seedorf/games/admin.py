from django.contrib import admin

from .models import Game, RsvpStatus


class GameAdmin(admin.ModelAdmin):
    readonly_fields = ('uuid', 'created_at', 'modified_at',)
    list_display = ('uuid', 'name', 'sport', 'status', 'start_time', 'end_time')
    list_filter = ('status', )


admin.site.register(Game, GameAdmin)
admin.site.register(RsvpStatus)

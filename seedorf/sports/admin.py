from django.contrib import admin

from .models import Sport


class SportAdmin(admin.ModelAdmin):
    readonly_fields = ('uuid', 'created_at', 'modified_at',)
    fields = ('uuid', 'category', 'name', 'description', 'translations', 'created_at', 'modified_at',)
    list_display = ('uuid', 'category', 'name')


admin.site.register(Sport, SportAdmin)

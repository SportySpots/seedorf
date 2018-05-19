from django.contrib import admin

from .models import Spot, SpotOpeningTime, SpotImage, SpotAmenity


class SpotOpeningTimeAdmin(admin.StackedInline):
    model = SpotOpeningTime


class SpotImageAdmin(admin.StackedInline):
    model = SpotImage


class SpotAmenityAdmin(admin.StackedInline):
    model = SpotAmenity


class SpotAdmin(admin.ModelAdmin):
    search_fields = ['name']
    list_display = ('name', 'owner', 'modified_at')
    list_filter = ('sports__category', 'is_verified', 'is_public',)
    inlines = [SpotImageAdmin, SpotOpeningTimeAdmin, SpotAmenityAdmin]


admin.site.register(Spot, SpotAdmin)

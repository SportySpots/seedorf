from django.contrib import admin

from .models import Spot, SpotOpeningTime, SpotImage, SpotAmenity


class SpotOpeningTimeAdmin(admin.StackedInline):
    model = SpotOpeningTime


class SpotImageAdmin(admin.StackedInline):
    model = SpotImage


class SpotAmenityAdmin(admin.StackedInline):
    model = SpotAmenity


class SpotAdmin(admin.ModelAdmin):
    inlines = [SpotImageAdmin, SpotOpeningTimeAdmin, SpotAmenityAdmin]


admin.site.register(Spot, SpotAdmin)

from django.contrib import admin

from .models import Spot, SpotOpeningTime, SpotImage, SpotAmenity

admin.site.register(Spot)
admin.site.register(SpotOpeningTime)
admin.site.register(SpotImage)
admin.site.register(SpotAmenity)

import  factory
from seedorf.spots.models import Spot, SpotAmenity, SpotImage, SpotOpeningTime


class SpotFactory(factory.Factory):

    class Meta:
        model = Spot


class SpotAmenityFactory(factory.Factory):

    class Meta:
        model = SpotAmenity


class SpotImage(factory.Factory):

    class Meta:
        model = SpotImage


class SpotOpeningTime(factory.Factory):

    class Meta:
        model = SpotOpeningTime


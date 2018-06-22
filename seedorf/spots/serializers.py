from django.utils.translation import ugettext_lazy as _
from rest_framework import serializers
from rest_framework_nested.serializers import NestedHyperlinkedModelSerializer

from seedorf.games.models import Game
from seedorf.locations.serializers import AddressSerializer
from seedorf.sports.models import Sport
from .models import Spot, SpotAmenity, SpotImage, SpotOpeningTime


class AmenitySerializer(serializers.ModelSerializer):
    class Meta:
        model = SpotAmenity
        fields = ("uuid", "data", "created_at", "modified_at")
        read_only_fields = ("uuid", "created_at", "modified_at")

    def create(self, validated_data):
        spot_uuid = self.context["view"].kwargs["spot_uuid"]
        sport_uuid = self.context["view"].kwargs["sport_uuid"]

        spot = Spot.objects.get(uuid=spot_uuid)
        sport = Sport.objects.get(uuid=sport_uuid)

        amenity = SpotAmenity.objects.create(spot=spot, sport=sport, **validated_data)

        return amenity


class OpeningTimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpotOpeningTime
        fields = ("uuid", "day", "start_time", "end_time", "is_closed", "created_at", "modified_at")
        read_only_fields = ("uuid", "created_at", "modified_at")

    def create(self, validated_data):
        spot_uuid = self.context["view"].kwargs["spot_uuid"]
        sport_uuid = self.context["view"].kwargs["sport_uuid"]

        spot = Spot.objects.get(uuid=spot_uuid)
        sport = Sport.objects.get(uuid=sport_uuid)

        opening_time = SpotOpeningTime.objects.create(spot=spot, sport=sport, **validated_data)

        return opening_time


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpotImage
        fields = ("uuid", "image", "is_flagged", "is_user_submitted", "created_at", "modified_at")
        read_only_fields = ("uuid", "created_at", "modified_at")

    def create(self, validated_data):
        spot_uuid = self.context["view"].kwargs["spot_uuid"]
        sport_uuid = self.context["view"].kwargs["sport_uuid"]

        spot = Spot.objects.get(uuid=spot_uuid)
        sport = Sport.objects.get(uuid=sport_uuid)

        image = SpotImage.objects.create(spot=spot, sport=sport, **validated_data)

        return image


class SpotSportNestedSerializer(serializers.ModelSerializer):
    uuid = serializers.UUIDField(required=True)

    amenities = serializers.SerializerMethodField()
    opening_times = serializers.SerializerMethodField()
    images = serializers.SerializerMethodField()

    class Meta:
        model = Sport
        fields = (
            "uuid",
            "category",
            "name",
            "description",
            "amenities",
            "opening_times",
            "images",
            "created_at",
            "modified_at",
        )
        read_only_fields = (
            "category",
            "name",
            "description",
            "amenities",
            "opening_times",
            "images",
            "created_at",
            "modified_at",
        )

    def create(self, validated_data):
        spot_uuid = self.context["view"].kwargs["spot_uuid"]
        spot = Spot.objects.get(uuid=spot_uuid)

        sport_uuid = validated_data["uuid"]
        try:
            sport = Sport.objects.get(uuid=sport_uuid)
        except Sport.DoesNotExist:
            raise serializers.ValidationError(_("Sport not found"))

        spot.sports.clear()
        spot.sports.add(sport)
        return sport

    @staticmethod
    def get_spot_uuid(context):
        if context["view"].basename == "spot":
            spot_uuid = context["spot_uuid"]
        elif context["view"].basename == "spot-sports":
            spot_uuid = context["view"].kwargs["spot_uuid"]

        return spot_uuid

    def get_images(self, obj):
        spot_uuid = self.get_spot_uuid(self.context)
        images = SpotImage.objects.filter(sport__uuid=obj.uuid, spot__uuid=spot_uuid)
        return ImageSerializer(images, many=True, context={"request": self.context["request"]}).data

    def get_opening_times(self, obj):
        spot_uuid = self.get_spot_uuid(self.context)
        opening_times = SpotOpeningTime.objects.filter(sport__uuid=obj.uuid, spot__uuid=spot_uuid)
        return OpeningTimeSerializer(opening_times, many=True).data

    def get_amenities(self, obj):
        spot_uuid = self.get_spot_uuid(self.context)
        amenities = SpotAmenity.objects.filter(sport__uuid=obj.uuid, spot__uuid=spot_uuid)
        return AmenitySerializer(amenities, many=True).data


class SpotSerializer(serializers.ModelSerializer):

    # TODO: is_verified can only be set by staff, currently its is covered by IsAdminOrReadOnly permission
    # TODO: is_permanently_closed can only be set by staff, currently is covered by IsAdminOrReadOnly permission
    # address = AddressSerializer(read_only=True, many=False)
    address = serializers.SerializerMethodField()
    sports = serializers.SerializerMethodField()

    class Meta:
        model = Spot
        exclude = ("id",)
        read_only_fields = ("uuid", "created_at", "modified_at")

    def create(self, validated_data):
        spot = Spot.objects.create(**validated_data)
        return spot

    def update(self, instance, validated_data):
        for k, v in validated_data.items():
            setattr(instance, k, v)
        instance.save()
        return instance

    def get_sports(self, obj):
        sports = obj.sports.all()
        self.context["spot_uuid"] = obj.uuid
        return SpotSportNestedSerializer(sports, many=True, read_only=True, context=self.context).data

    def get_address(self, obj):
        if obj.address is None:
            return None
        else:
            return AddressSerializer(obj.address, many=False, read_only=True, context=self.context).data

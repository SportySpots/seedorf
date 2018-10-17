from rest_framework import serializers

from .models import Sport


class SportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sport
        fields = (
            "uuid",
            "category",
            "name",
            "description",
            "created_at",
            "modified_at",
        )
        read_only_fields = ("uuid", "category", "created_at", "modified_at")

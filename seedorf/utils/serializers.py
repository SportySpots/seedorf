from rest_framework import serializers

class GenericUuidSerializer(serializers.Serializer):
    uuid = serializers.UUIDField(required=True)

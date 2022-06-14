from rest_framework import serializers
from youmusic.models import Cancion

class CancionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cancion
        fields = ['idCancion', 'nombreCancion']
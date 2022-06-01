from django import forms
from django.forms import ModelForm
from .models import Cancion

class CancionForm(ModelForm):
    class Meta:
        model = Cancion
        fields = ['idCancion', 'nombreCancion', 'audioCancion', 'imagenCancion']
from django.urls import path
from rest_cancion.views import detalle_cancion, lista_cancion
from rest_cancion.viewsLogin import login

urlpatterns = [
    path('lista_cancion', lista_cancion, name = "lista_cancion"),
    path('detalle_cancion/<id>', detalle_cancion, name="detalle_cancion"),
    path('login', login, name="login"),
]


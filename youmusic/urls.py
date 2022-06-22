from unicodedata import name
from django.conf import settings
from django.urls import path
from .views import *
from django.conf.urls.static import static
from django.contrib.auth.views import LogoutView

urlpatterns = [
    path('', home, name="home"),
    path('signin', signin, name="signin"),
    path('signup', signup, name="signup"),
    path('contact', contact, name="contact"),
    path('player', player, name="player"),
    path('aboutus', aboutus, name="aboutus"),
    path('form-cancion', form_cancion, name="form-cancion"),
    path('form_modificar_cancion/<id>', form_modificar_cancion, name="form_modificar_cancion"),
    path('form_eliminar_cancion/<id>', form_eliminar_cancion, name="form_eliminar_cancion"),
    path('logout', LogoutView.as_view(), name="logout"),
]


urlpatterns += static(settings.MEDIA_URL, document__root = settings.MEDIA_ROOT)
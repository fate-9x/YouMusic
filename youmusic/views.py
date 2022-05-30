from unicodedata import name
from django.shortcuts import redirect, render
from .models import Cancion
from .forms import CancionForm

# Create your views here.
def home(request):
    return render(request,"youmusic/index.html")

def signin(request):
    return render(request,"youmusic/iniciosesion.html")

def signup(request):
    return render(request,"youmusic/registrarse.html")

def contact(request):
    return render(request,"youmusic/contactanos.html")

def player(request):

    listaCanciones = Cancion.objects.all()

    data = {'canciones': listaCanciones}

    return render(request,"youmusic/reproductor.html", data)

def aboutus(request):
    return render(request,"youmusic/quienessomos.html")


def form_cancion(request):
    datos = {
        'form': CancionForm()
    }

    if request.method == 'POST':
        formulario = CancionForm(request.POST or None, request.FILES or None)

        if formulario.is_valid():
            formulario.save() #insert a la BD
            datos['mensaje'] = 'Se guardó Cancion'

    

    return render(request, 'youmusic/form-cancion.html', datos)

def form_modificar_cancion(request, id ):

    cancion = Cancion.objects.get(idCancion=id)

    datos = {
        'form': CancionForm(instance=cancion)
    }

    if request.method == 'POST':
        formulario = CancionForm(request.POST or None, request.FILES or None, instance=cancion)

        if formulario.is_valid():
            formulario.save() #insert a la BD
            datos['mensaje'] = 'Se modifico Cancion'

    return render(request, 'youmusic/form_modificar_cancion.html', datos)

def form_eliminar_cancion(request, id):

    cancion = Cancion.objects.get(idCancion=id)
    cancion.delete()

    return redirect(to="home")
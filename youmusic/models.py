from django.db import models

# Create your models here.

class Cancion(models.Model):
    idCancion = models.IntegerField(primary_key=True, verbose_name='Id de cancion')
    nombreCancion = models.CharField(max_length=20, verbose_name='Nombre de la cancion')

    audioCancion = models.FileField(upload_to='static/youmusic/files/audio', default="/", verbose_name='Audio Cancion', null=True)
    imagenCancion = models.ImageField(upload_to = 'static/youmusic/files/img', default="/", verbose_name='Imagen Cancion', null=True)

    def __str__(self):
        return self.nombreCancion

class Usuarios(models.Model):
    nombreUsuario = models.CharField(max_length=30, verbose_name='Nombre de Usuario')

    contraseñaUsuario = models.CharField(max_length = 30, verbose_name='Contraseña de Usuario')
    
    tokenUsuario = models.CharField(max_length=100, verbose_name='Token de Usuario')

    emailUsuario = models.CharField(max_length=100, verbose_name='Email de Usuario', null=True)
'''
class Imagen(models.Model):
    
    idImagen = models.IntegerField(primary_key=True, verbose_name='Id de imagen')

    nombreImagen = models.CharField(max_length=20, null=True,verbose_name='Nombre Imagen Cancion')

    imagen = models.ImageField(upload_to = 'files/img', default='files/img')

    cancion = models.ForeignKey(Cancion, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombreImagen

'''

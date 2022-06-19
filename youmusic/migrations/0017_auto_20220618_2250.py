# Generated by Django 3.2.10 on 2022-06-19 02:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('youmusic', '0016_auto_20220518_1505'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cancion',
            name='audioCancion',
            field=models.FileField(default='/', null=True, upload_to='static/youmusic/files/audio', verbose_name='Audio Cancion'),
        ),
        migrations.AlterField(
            model_name='cancion',
            name='imagenCancion',
            field=models.ImageField(default='/', null=True, upload_to='static/youmusic/files/img', verbose_name='Imagen Cancion'),
        ),
    ]

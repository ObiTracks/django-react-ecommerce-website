# Generated by Django 2.2.13 on 2022-11-26 03:29

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='render',
            field=models.ImageField(default=django.utils.timezone.now, upload_to='', verbose_name=5),
            preserve_default=False,
        ),
    ]

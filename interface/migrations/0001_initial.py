# Generated by Django 4.1.7 on 2023-08-08 14:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Bgcolor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('color', models.CharField(max_length=50, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Navbarcolor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('color', models.CharField(max_length=50, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='İnterfacesettings',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('webpagename', models.CharField(max_length=50)),
                ('title', models.CharField(max_length=50)),
                ('bgcolor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='interface.bgcolor')),
                ('navbarcolor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='interface.navbarcolor')),
            ],
        ),
    ]
# Generated by Django 4.1.7 on 2023-09-01 09:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0009_orders_invoice'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orders',
            name='invoice',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
    ]

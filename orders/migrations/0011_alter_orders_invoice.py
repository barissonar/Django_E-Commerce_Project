# Generated by Django 4.1.7 on 2023-09-01 10:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0010_alter_orders_invoice'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orders',
            name='invoice',
            field=models.FileField(blank=True, null=True, upload_to='invoice'),
        ),
    ]

# Generated by Django 4.1.7 on 2023-09-01 09:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0007_orders_orderstatus_alter_orders_cargo_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orders',
            name='date',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='orders',
            name='district',
            field=models.CharField(max_length=50),
        ),
    ]
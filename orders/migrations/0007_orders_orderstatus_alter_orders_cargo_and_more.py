# Generated by Django 4.1.7 on 2023-08-10 09:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0006_alter_orders_apartment_alter_orders_cargo_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='orders',
            name='orderstatus',
            field=models.IntegerField(choices=[(1, 'Onay Bekliyor'), (2, 'Onaylandı'), (3, 'Reddedildi'), (4, 'Geri İade'), (5, 'Hazırlanıyor'), (6, 'Kargolandı'), (7, 'Teslim Edildi')], default=1),
        ),
        migrations.AlterField(
            model_name='orders',
            name='cargo',
            field=models.CharField(choices=[('yurtici', 'Yurtiçi Kargo'), ('aras', 'Aras Kargo'), ('mng', 'MNG Kargo')], default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='orders',
            name='district',
            field=models.CharField(choices=[('', 'İlçe')], max_length=50),
        ),
    ]

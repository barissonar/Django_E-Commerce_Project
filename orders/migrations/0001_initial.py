# Generated by Django 4.1.7 on 2023-08-08 14:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CreditCarts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cardholder_name', models.CharField(max_length=100)),
                ('cartnumber', models.CharField(max_length=16)),
                ('expiration_date', models.CharField(max_length=5)),
                ('cvv', models.CharField(max_length=3)),
                ('UserId', models.IntegerField()),
                ('totalprice', models.DecimalField(decimal_places=2, max_digits=10)),
            ],
        ),
        migrations.CreateModel(
            name='OrdersDetail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('orderID', models.IntegerField()),
                ('quantity', models.IntegerField()),
                ('size', models.CharField(max_length=10)),
                ('price', models.FloatField()),
                ('product', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='products.products')),
            ],
        ),
        migrations.CreateModel(
            name='Orders',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customerID', models.IntegerField()),
                ('name', models.CharField(max_length=50)),
                ('surname', models.CharField(max_length=50)),
                ('address', models.CharField(max_length=150)),
                ('apartment', models.CharField(default='', max_length=100)),
                ('postcode', models.IntegerField(default=2)),
                ('province', models.CharField(choices=[('', 'İl'), ('adana', 'Adana'), ('adiyaman', 'Adıyaman'), ('afyonkarahisar', 'Afyonkarahisar'), ('agri', 'Ağrı'), ('aksaray', 'Aksaray'), ('amasya', 'Amasya'), ('ankara', 'Ankara'), ('antalya', 'Antalya'), ('ardahan', 'Ardahan'), ('artvin', 'Artvin'), ('aydin', 'Aydın'), ('balikesir', 'Balıkesir'), ('bartin', 'Bartın'), ('batman', 'Batman'), ('bayburt', 'Bayburt'), ('bilecik', 'Bilecik'), ('bingol', 'Bingöl'), ('bitlis', 'Bitlis'), ('bolu', 'Bolu'), ('burdur', 'Burdur'), ('bursa', 'Bursa'), ('canakkale', 'Çanakkale'), ('cankiri', 'Çankırı'), ('corum', 'Çorum'), ('denizli', 'Denizli'), ('diyarbakir', 'Diyarbakır'), ('duzce', 'Düzce'), ('edirne', 'Edirne'), ('elazig', 'Elazığ'), ('erzincan', 'Erzincan'), ('erzurum', 'Erzurum'), ('eskisehir', 'Eskişehir'), ('gaziantep', 'Gaziantep'), ('giresun', 'Giresun'), ('gumushane', 'Gümüşhane'), ('hakkari', 'Hakkâri'), ('hatay', 'Hatay'), ('igdir', 'Iğdır'), ('isparta', 'Isparta'), ('istanbul', 'İstanbul'), ('izmir', 'İzmir'), ('kahramanmaras', 'Kahramanmaraş'), ('karabuk', 'Karabük'), ('karaman', 'Karaman'), ('kars', 'Kars'), ('kastamonu', 'Kastamonu'), ('kayseri', 'Kayseri'), ('kirikkale', 'Kırıkkale'), ('kirklareli', 'Kırklareli'), ('kirsehir', 'Kırşehir'), ('kilis', 'Kilis'), ('kocaeli', 'Kocaeli'), ('konya', 'Konya'), ('kutahya', 'Kütahya'), ('malatya', 'Malatya'), ('manisa', 'Manisa'), ('mardin', 'Mardin'), ('mersin', 'Mersin'), ('mugla', 'Muğla'), ('mus', 'Muş'), ('nevsehir', 'Nevşehir'), ('nigde', 'Niğde'), ('ordu', 'Ordu'), ('osmaniye', 'Osmaniye'), ('rize', 'Rize'), ('sakarya', 'Sakarya'), ('samsun', 'Samsun'), ('sanliurfa', 'Şanlıurfa'), ('siirt', 'Siirt'), ('sinop', 'Sinop'), ('sivas', 'Sivas'), ('sirnak', 'Şırnak'), ('tekirdag', 'Tekirdağ'), ('tokat', 'Tokat'), ('trabzon', 'Trabzon'), ('tunceli', 'Tunceli'), ('usak', 'Uşak'), ('van', 'Van'), ('yalova', 'Yalova'), ('yozgat', 'Yozgat'), ('zonguldak', 'Zonguldak')], max_length=100)),
                ('district', models.CharField(max_length=100)),
                ('number', models.CharField(default='', max_length=100)),
                ('cargo', models.CharField(choices=[('yurtici', 'Yurtiçi Kargo'), ('aras', 'Aras Kargo'), ('mng', 'MNG Kargo')], default='', max_length=100)),
                ('date', models.DateField()),
                ('orderdetail', models.ManyToManyField(to='orders.ordersdetail')),
                ('paymentinformation', models.ForeignKey(default='', on_delete=models.SET('Kart Bilgisi Silindi'), to='orders.creditcarts')),
            ],
        ),
    ]

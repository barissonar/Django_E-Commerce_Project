import os

from django.db import models
from products.models import Products
from django.contrib.auth.models import User
# Create your models here.

class CreditCarts(models.Model):
    cardholder_name = models.CharField(max_length=100)
    cartnumber = models.CharField(max_length=16)
    expiration_date = models.CharField(max_length=5)
    cvv = models.CharField(max_length=3)
    UserId = models.IntegerField()
    totalprice = models.DecimalField(max_digits=10,decimal_places=2)
    def __str__(self):
        return f"CreditCart_ID:{self.pk} — Cardholder Name: {self.cardholder_name} — Card Number:{self.cartnumber} — TOTAL PRİCE: {self.totalprice} TL"


PROVINCE_CHOICES = (
    ('', 'İl'),
    ('adana', 'Adana'),
    ('adiyaman', 'Adıyaman'),
    ('afyonkarahisar', 'Afyonkarahisar'),
    ('agri', 'Ağrı'),
    ('aksaray', 'Aksaray'),
    ('amasya', 'Amasya'),
    ('ankara', 'Ankara'),
    ('antalya', 'Antalya'),
    ('ardahan', 'Ardahan'),
    ('artvin', 'Artvin'),
    ('aydin', 'Aydın'),
    ('balikesir', 'Balıkesir'),
    ('bartin', 'Bartın'),
    ('batman', 'Batman'),
    ('bayburt', 'Bayburt'),
    ('bilecik', 'Bilecik'),
    ('bingol', 'Bingöl'),
    ('bitlis', 'Bitlis'),
    ('bolu', 'Bolu'),
    ('burdur', 'Burdur'),
    ('bursa', 'Bursa'),
    ('canakkale', 'Çanakkale'),
    ('cankiri', 'Çankırı'),
    ('corum', 'Çorum'),
    ('denizli', 'Denizli'),
    ('diyarbakir', 'Diyarbakır'),
    ('duzce', 'Düzce'),
    ('edirne', 'Edirne'),
    ('elazig', 'Elazığ'),
    ('erzincan', 'Erzincan'),
    ('erzurum', 'Erzurum'),
    ('eskisehir', 'Eskişehir'),
    ('gaziantep', 'Gaziantep'),
    ('giresun', 'Giresun'),
    ('gumushane', 'Gümüşhane'),
    ('hakkari', 'Hakkâri'),
    ('hatay', 'Hatay'),
    ('igdir', 'Iğdır'),
    ('isparta', 'Isparta'),
    ('istanbul', 'İstanbul'),
    ('izmir', 'İzmir'),
    ('kahramanmaras', 'Kahramanmaraş'),
    ('karabuk', 'Karabük'),
    ('karaman', 'Karaman'),
    ('kars', 'Kars'),
    ('kastamonu', 'Kastamonu'),
    ('kayseri', 'Kayseri'),
    ('kirikkale', 'Kırıkkale'),
    ('kirklareli', 'Kırklareli'),
    ('kirsehir', 'Kırşehir'),
    ('kilis', 'Kilis'),
    ('kocaeli', 'Kocaeli'),
    ('konya', 'Konya'),
    ('kutahya', 'Kütahya'),
    ('malatya', 'Malatya'),
    ('manisa', 'Manisa'),
    ('mardin', 'Mardin'),
    ('mersin', 'Mersin'),
    ('mugla', 'Muğla'),
    ('mus', 'Muş'),
    ('nevsehir', 'Nevşehir'),
    ('nigde', 'Niğde'),
    ('ordu', 'Ordu'),
    ('osmaniye', 'Osmaniye'),
    ('rize', 'Rize'),
    ('sakarya', 'Sakarya'),
    ('samsun', 'Samsun'),
    ('sanliurfa', 'Şanlıurfa'),
    ('siirt', 'Siirt'),
    ('sinop', 'Sinop'),
    ('sivas', 'Sivas'),
    ('sirnak', 'Şırnak'),
    ('tekirdag', 'Tekirdağ'),
    ('tokat', 'Tokat'),
    ('trabzon', 'Trabzon'),
    ('tunceli', 'Tunceli'),
    ('usak', 'Uşak'),
    ('van', 'Van'),
    ('yalova', 'Yalova'),
    ('yozgat', 'Yozgat'),
    ('zonguldak', 'Zonguldak')
)

RADIO_CHOICES = (
    ('yurtici', 'Yurtiçi Kargo'),
    ('aras', 'Aras Kargo'),
    ('mng', 'MNG Kargo')
)
STATUS_CHOICES = (
    (1,'Onay Bekliyor'),
    (2,'Onaylandı'),
    (3,'Reddedildi'),
    (4,'Geri İade'),
    (5,'Hazırlanıyor'),
    (6,'Kargolandı'),
    (7,'Teslim Edildi'),
)
class OrdersDetail(models.Model):
    orderID = models.IntegerField()
    product = models.ForeignKey(Products,on_delete=models.CASCADE)
    quantity = models.IntegerField()
    size = models.CharField(max_length=10)
    price = models.DecimalField(max_digits=10,decimal_places=2)
    def __str__(self):
        return f"{self.product} — quantity:{self.quantity} — size:{self.size} — price:{self.price} — Order No:{self.orderID}"

def get_upload_path(instance, filename):
    return os.path.join('invoice',f'ORDER_NO-{instance.pk}-invoice_{filename}')

class Orders(models.Model):
    orderdetail = models.ManyToManyField(OrdersDetail)
    customerID = models.ForeignKey(User,on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    address = models.TextField(max_length=150)
    apartment = models.CharField(max_length=50)
    postcode = models.CharField(max_length=50)
    province = models.CharField(max_length=50,choices=PROVINCE_CHOICES)
    district = models.CharField(max_length=50)
    number = models.CharField(max_length=50)
    cargo = models.CharField(max_length=50,choices=RADIO_CHOICES,blank=False,null=False,default='')
    paymentinformation = models.ForeignKey(CreditCarts,on_delete=models.SET('Kart Bilgisi Silindi'),default="")
    date = models.DateTimeField()
    orderstatus = models.IntegerField(choices=STATUS_CHOICES,default=1)
    invoice = models.FileField(upload_to=get_upload_path,blank=True,null=True)
    def __str__(self):
        return f"Sipariş No: {self.pk}"

def user_str_custom(self):
    return f" User_ID: {self.pk} — Name: {self.first_name} —  Surname: {self.last_name}"

# User modelinin __str__ metodunu özelleştirilmiş yöntemle değiştirelim
User.__str__ = user_str_custom



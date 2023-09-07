from django.contrib import admin
from .models import Orders,OrdersDetail,CreditCarts

@admin.register(Orders)
class OrdersAdmin(admin.ModelAdmin):
    list_display = ('id','name','surname','customerID','date','orderstatus')
    list_filter = ('date','orderstatus')
    search_fields = ('id','name','surname')
    class Media:
        js = ('orders/js/filterbydistrict.js','js/jquery.js')

@admin.register(OrdersDetail)
class OrdersDetailAdmin(admin.ModelAdmin):
    list_display = ('id','orderID','product','quantity','size','price')
    search_fields = ('orderID',)

@admin.register(CreditCarts)
class CreditCartsAdmin(admin.ModelAdmin):
    search_fields = ('cardholder_name','UserId','cartnumber')


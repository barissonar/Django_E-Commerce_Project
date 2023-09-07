from django.urls import path
from . import views

urlpatterns = [
    path('', views.home,name='index'),
    path('addtocart',views.addcart,name='addtocart'),
    path('removetocart',views.removecart,name='removetocart'),
    path('quantitypositivecart',views.quantitypositivecart,name='quantitypositivecart'),
    path('quantitynegativecart',views.quantitynegativecart,name='quantitynegativecart'),
    path('buycart',views.buycart,name='buycart'),
    path('yeni-gelenler',views.news,name='news'),
    path('account/login',views.userlogin,name='userlogin'),
    path('account/register',views.userregister,name='userregister'),
    path('account/userinfo',views.userinfo,name='userinfo'),
    path('account/orderhistory/',views.orderhistory,name='orderhistory'),
    path('account/orderhistory/<int:orderID>',views.orderhistorydetail,name='orderhistorydetail'),
    path('account/changepass',views.passchange,name='passchange'),
    path('account/logout',views.userlogout,name="logout"),

]

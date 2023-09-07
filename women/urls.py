from django.urls import path
from . import views

urlpatterns = [
    path('',views.home,name='homewomen'),
    path('<slug:categoriename>', views.womencategories_get, name="womencategories-get"),
    path('<slug:categoriename>/<slug:producturl>',views.womenproductdetail_get,name='womenproductdetail-get'),
]

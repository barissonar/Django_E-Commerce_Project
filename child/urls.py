from django.urls import path
from . import views

urlpatterns = [
    path('',views.home,name='homechild'),
    path('<slug:categoriename>', views.childcategories_get, name="childcategories-get"),
    path('<slug:categoriename>/<slug:producturl>',views.childproductdetail_get,name='childproductdetail-get'),
]
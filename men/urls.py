from django.urls import path
from . import views

urlpatterns = [
    path('',views.home,name='homeman'),
    path('<slug:categoriename>',views.mancategories_get,name="mancategories-get"),
    path('<slug:categoriename>/<slug:producturl>',views.manproductdetail_get,name='manproductdetail_get'),


]

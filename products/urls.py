from django.urls import path
from . import views

urlpatterns = [
    path('admins/categories/selectgenderchange',views.selectgenderchange_categories,name='selectgenderchange_categories'),
    path('admins/products/selectgenderchange',views.selectgenderchange_products,name='selectgenderchange_products'),
    path('admins/products/selecttopcategoriechange',views.selecttopcategoriechange_products,name='selecttopcategoriechange_products'),
]


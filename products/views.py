from django.http import JsonResponse
from django.shortcuts import render
from interface.models import İnterfacesettings
from .models import Categories


# Create your views here.

def interfacesettings(request):
    interfacesettings = İnterfacesettings.objects.first()
    return {"interfacesettings":interfacesettings}

def mancategories(request):
    categories = Categories.objects.filter(gender=1,topcategorie__isnull=True)
    return {"mancategories":categories}
def womencategories(request):
    categories = Categories.objects.filter(gender=2,topcategorie__isnull=True)
    return {"womencategories":categories}
def childcategories(request):
    categories = Categories.objects.filter(gender=3,topcategorie__isnull=True)
    return {"childcategories":categories}


def selectgenderchange_categories(request):
       topcategories= list(Categories.objects.filter(topcategorie__isnull=True).values('pk','categoriename'))
       listtojson = {'topcategories':topcategories}

       return JsonResponse(listtojson)

def selectgenderchange_products(request):
    selectedgender = request.POST.get('gender')
    topcategoriebygender = list(Categories.objects.filter(gender=selectedgender, topcategorie__isnull=True).values('pk', 'categoriename'))
    listtojson = {'topcategoriebygender': topcategoriebygender}

    return JsonResponse(listtojson)

def selecttopcategoriechange_products(request):
    selectedgender = request.POST.get('gender')
    selectedtopcategorie = request.POST.get('parentcategory')
    topcategorie = Categories.objects.get(pk=selectedtopcategorie)
    subcategoriebytopcategorie = list(topcategorie.children.filter(gender=selectedgender).values('pk','categoriename'))
    lisstojson = {'subcategoriebytopcategorie':subcategoriebytopcategorie}
    return JsonResponse(lisstojson)


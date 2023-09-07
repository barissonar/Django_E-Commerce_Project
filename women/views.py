from django.http import Http404, HttpResponse, JsonResponse
from products.models import Categories,Products,ProductImages
from django.shortcuts import render, redirect



# Create your views here.

def home(request):
    return render(request, 'home.html')

def womencategories_get(request,categoriename):
    if request.method == 'POST':
        return checkboxfilter_get(request, categoriename)
    if Categories.objects.filter(slug=categoriename, gender=2, topcategorie__isnull=False).exists():
        subcategorie = Categories.objects.get(slug=categoriename, gender=2, topcategorie__isnull=False)
        products = Products.objects.filter(subcategorie=subcategorie.id, gender=2)

        brandfilter = products.values_list('brand__brand', flat=True).distinct()
        newbrandfilter_list = [item.lower() for item in brandfilter]
        brandfilter = set(newbrandfilter_list)

        colorfilter = products.values_list('color__color', flat=True).distinct()
        newcolorfilter_list = [item.lower() for item in colorfilter]
        colorfilter = set(newcolorfilter_list)

        bodyfilter = products.values_list('bodysize__size', flat=True).distinct()
        newbodyfilter_list = [item.lower() for item in bodyfilter]
        bodyfilter = set(newbodyfilter_list)

        if categoriename == subcategorie.slug:
            return render(request, 'women/womengetcategorie.html',
                          {"subcategorie": subcategorie, "subproducts": products, "categoriename": categoriename,
                           "brandfilter": brandfilter, "colorfilter": colorfilter, 'bodyfilter': bodyfilter})

    elif Categories.objects.filter(slug=categoriename, gender=2, topcategorie__isnull=True).exists():
        topcategorie = Categories.objects.get(slug=categoriename, gender=2, topcategorie__isnull=True)
        products = Products.objects.filter(topcategorie=topcategorie.id, gender=2)

        brandfilter = products.values_list('brand__brand', flat=True).distinct()
        newbrandfilter_list = [item.lower() for item in brandfilter]
        brandfilter = set(newbrandfilter_list)

        colorfilter = products.values_list('color__color', flat=True).distinct()
        newcolorfilter_list = [item.lower() for item in colorfilter]
        colorfilter = set(newcolorfilter_list)

        bodyfilter = products.values_list('bodysize__size', flat=True).distinct()
        newbodyfilter_list = [item.lower() for item in bodyfilter]
        bodyfilter = set(newbodyfilter_list)

        if categoriename == topcategorie.slug:
            return render(request, 'women/womengetcategorie.html',
                          {"topcategorie": topcategorie, "topproducts": products, "categoriename": categoriename,
                           "brandfilter": brandfilter, "colorfilter": colorfilter, 'bodyfilter': bodyfilter})
    else:
        return Http404("Sayfa Bulunamadı.")


def checkboxfilter_get(request, categoriename):
    brands = request.POST.getlist('brandsjs[]')
    colors = request.POST.getlist('colorsjs[]')
    bodysizes = request.POST.getlist('bodyjs[]')
    filterproducts = []
    cleanfilterproducts = []

    if Categories.objects.filter(slug=categoriename, gender=2, topcategorie__isnull=False).exists():
        subcategorie = Categories.objects.get(slug=categoriename, gender=2, topcategorie__isnull=False)
        products = Products.objects.filter(subcategorie=subcategorie.id, gender=2)

        if brands and colors and bodysizes:
            for brand in brands:
                for color in colors:
                    for bodysize in bodysizes:
                        filterproducts += products.filter(brand__brand__iexact=brand, color__color__iexact=color,
                                                          bodysize__size__iexact=bodysize).values("id", "slug", "name",
                                                                                                  "brand__brand",
                                                                                                  "price", "image")

        elif bodysizes and colors and not brands:
            for bodysize in bodysizes:
                for color in colors:
                    filterproducts += products.filter(bodysize__size__iexact=bodysize,
                                                      color__color__iexact=color).values("id", "slug", "name",
                                                                                         "brand__brand", "price",
                                                                                         "image")

        elif bodysizes and brands and not colors:
            for bodysize in bodysizes:
                for brand in brands:
                    filterproducts += products.filter(bodysize__size__iexact=bodysize,
                                                      brand__brand__iexact=brand).values("id", "slug", "name",
                                                                                         "brand__brand", "price",
                                                                                         "image")

        elif bodysizes and not brands and not colors:
            for bodysize in bodysizes:
                filterproducts += products.filter(bodysize__size__iexact=bodysize).values("id", "slug", "name",
                                                                                          "brand__brand", "price",
                                                                                          "image")

        elif brands and colors and not bodysizes:
            for brand in brands:
                for color in colors:
                    filterproducts += products.filter(brand__brand__iexact=brand, color__color__iexact=color).values(
                        "id", "slug", "name", "brand__brand", "price", "image")

        elif brands and not colors and not bodysizes:
            for brand in brands:
                filterproducts += products.filter(brand__brand__iexact=brand).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image")

        elif colors and not brands and not bodysizes:
            for color in colors:
                filterproducts += products.filter(color__color__iexact=color).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image")

        elif not brands and not colors and not bodysizes:
            filterproducts += products.all().values("id", "slug", "name", "brand__brand", "price", "image")

        for filterproduct in filterproducts:
            if filterproduct not in cleanfilterproducts:
                cleanfilterproducts.append(filterproduct)

        listtojson = {"filterproducts": cleanfilterproducts, "categoriename": categoriename}

        return JsonResponse(listtojson)



    elif Categories.objects.filter(slug=categoriename, gender=2, topcategorie__isnull=True).exists():
        topcategorie = Categories.objects.get(slug=categoriename, gender=2, topcategorie__isnull=True)
        products = Products.objects.filter(topcategorie=topcategorie.id, gender=2)

        if brands and colors and bodysizes:
            for brand in brands:
                for color in colors:
                    for bodysize in bodysizes:
                        filterproducts += products.filter(brand__brand__iexact=brand, color__color__iexact=color,
                                                          bodysize__size__iexact=bodysize).values("id", "slug", "name",
                                                                                                  "brand__brand",
                                                                                                  "price", "image")

        elif bodysizes and colors and not brands:
            for bodysize in bodysizes:
                for color in colors:
                    filterproducts += products.filter(bodysize__size__iexact=bodysize,
                                                      color__color__iexact=color).values("id", "slug", "name",
                                                                                         "brand__brand", "price",
                                                                                         "image")

        elif bodysizes and brands and not colors:
            for bodysize in bodysizes:
                for brand in brands:
                    filterproducts += products.filter(bodysize__size__iexact=bodysize,
                                                      brand__brand__iexact=brand).values("id", "slug", "name",
                                                                                         "brand__brand", "price",
                                                                                         "image")

        elif bodysizes and not brands and not colors:
            for bodysize in bodysizes:
                filterproducts += products.filter(bodysize__size__iexact=bodysize).values("id", "slug", "name",
                                                                                          "brand__brand", "price",
                                                                                          "image")

        elif brands and colors and not bodysizes:
            for brand in brands:
                for color in colors:
                    filterproducts += products.filter(brand__brand__iexact=brand, color__color__iexact=color).values(
                        "id", "slug", "name", "brand__brand", "price", "image")

        elif brands and not colors and not bodysizes:
            for brand in brands:
                filterproducts += products.filter(brand__brand__iexact=brand).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image")

        elif colors and not brands and not bodysizes:
            for color in colors:
                filterproducts += products.filter(color__color__iexact=color).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image")

        elif not brands and not colors and not bodysizes:
            filterproducts += products.all().values("id", "slug", "name", "brand__brand", "price", "image")

        for filterproduct in filterproducts:
            if filterproduct not in cleanfilterproducts:
                cleanfilterproducts.append(filterproduct)

        listtojson = {"filterproducts": cleanfilterproducts, "categoriename": categoriename}

        return JsonResponse(listtojson)

    else:
        return Http404("Sayfa Bulunamadı.")


def womenproductdetail_get(request,categoriename,producturl):
    product = Products.objects.get(slug=producturl,gender=2)
    images = ProductImages.objects.filter(product=product.id)
    return render(request, 'pages/getproductdetail.html', {"product":product,"images":images})


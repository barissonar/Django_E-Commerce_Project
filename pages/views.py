import json
from _decimal import Decimal, ROUND_HALF_UP
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout, update_session_auth_hash
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from decimal import Decimal
from .forms import NewUserForm, LoginUser, PasschangeForm, BuyForm, BuyFormPayment,UserinfoForm
from datetime import date, timedelta,datetime
from itertools import chain
from django.contrib.auth.models import User
from products.models import Products
from orders.models import OrdersDetail,Orders




def home(request):
    return render(request, 'pages/index.html')


def news(request):
    if request.method == "POST":
        return checkboxfilter_get(request)
    startdate = datetime.now() - timedelta(days=7)
    enddate = datetime.now()
    manproducts = Products.objects.filter(gender=1,createdate__range=[startdate, enddate])
    brman = manproducts.values_list('brand__brand', flat=True).distinct()
    colman = manproducts.values_list('color__color', flat=True).distinct()
    bodyman = manproducts.values_list('bodysize__size', flat=True).distinct()


    womenproducts = Products.objects.filter(gender=2,createdate__range=[startdate, enddate])
    brwomen = womenproducts.values_list('brand__brand', flat=True).distinct()
    colwomen = womenproducts.values_list('color__color', flat=True).distinct()
    bodywomen = womenproducts.values_list('bodysize__size', flat=True).distinct()


    childproducts = Products.objects.filter(gender=3,createdate__range=[startdate, enddate])
    brchild = childproducts.values_list('brand__brand', flat=True).distinct()
    colchild = childproducts.values_list('color__color', flat=True).distinct()
    bodychild = childproducts.values_list('bodysize__size', flat=True).distinct()


    brandsfilter = list(set(chain(brman, brwomen, brchild)))
    newbrandsfilter_list = [item.lower() for item in brandsfilter]
    brandsfilter = set(newbrandsfilter_list)

    colorsfilter = list(set(chain(colman, colwomen, colchild)))
    newcolorsfilter_list = [item.lower() for item in colorsfilter]
    colorsfilter = set(newcolorsfilter_list)

    bodyfilter = list(set(chain(bodyman,bodywomen,bodychild)))
    newbodyfilter_list = [item.lower() for item in bodyfilter]
    bodyfilter = set(newbodyfilter_list)

    totalproduct = len(manproducts) + len(womenproducts) + len(childproducts)
    return render(request, 'pages/news.html',
                  {'manproducts': manproducts, 'womenproducts': womenproducts, 'childproducts': childproducts,
                   'brandsfilter': brandsfilter, 'colorsfilter': colorsfilter, 'bodyfilter':bodyfilter,
                   'totalproduct': totalproduct})


def checkboxfilter_get(request):
    brands = request.POST.getlist('brandsjs[]')
    colors = request.POST.getlist('colorsjs[]')
    bodysizes = request.POST.getlist('bodyjs[]')
    gender = request.POST.getlist('genderjs[]')
    startdate = datetime.now() - timedelta(days=7)
    enddate = datetime.now()

    manproducts = Products.objects.filter(gender=1,createdate__range=[startdate, enddate])
    womenproducts = Products.objects.filter(gender=2,createdate__range=[startdate, enddate])
    childproducts = Products.objects.filter(gender=3,createdate__range=[startdate, enddate])
    filterproducts = []
    cleanfilterproducts = []
    if brands and not colors and not bodysizes and not gender:
        for brand in brands:
            filterproducts += womenproducts.filter(brand__brand__iexact=brand).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
            filterproducts += manproducts.filter(brand__brand__iexact=brand).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
            filterproducts += childproducts.filter(brand__brand__iexact=brand).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")

    elif colors and not brands and not bodysizes and not gender:
        for color in colors:
            filterproducts += womenproducts.filter(color__color__iexact=color).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
            filterproducts += manproducts.filter(color__color__iexact=color).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
            filterproducts += childproducts.filter(color__color__iexact=color).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")

    elif bodysizes and not brands and not gender and not colors:
        for bodysize in bodysizes:
            filterproducts += womenproducts.filter(bodysize__size__iexact=bodysize).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
            filterproducts += manproducts.filter(bodysize__size__iexact=bodysize).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
            filterproducts += childproducts.filter(bodysize__size__iexact=bodysize).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")

    elif gender and not brands and not bodysizes and not colors:
        for gend in gender:
            if gend == "erkek":
               filterproducts += manproducts.all().values("id", "slug", "name","brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
            if gend == "kadin":
               filterproducts += womenproducts.all().values("id", "slug", "name","brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
            if gend == "cocuk":
               filterproducts += childproducts.all().values("id", "slug", "name","brand__brand", "price", "image","subcategorie__categoriename","gender__gender")


    elif brands and colors and bodysizes and gender :
        for brand in brands:
            for color in colors:
                for body in bodysizes:
                    for gend in gender:
                        filterproducts += womenproducts.filter(brand__brand__iexact=brand, color__color__iexact=color,bodysize__size__iexact=body,
                                                               gender__gender__iexact=gend).values("id", "slug", "name","brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
                        filterproducts += manproducts.filter(brand__brand__iexact=brand, color__color__iexact=color,bodysize__size__iexact=body,
                                                             gender__gender__iexact=gend).values("id", "slug", "name","brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
                        filterproducts += childproducts.filter(brand__brand__iexact=brand, color__color__iexact=color,bodysize__size__iexact=body,
                                                               gender__gender__iexact=gend).values("id", "slug", "name","brand__brand", "price", "image","subcategorie__categoriename","gender__gender")

    elif brands and colors and bodysizes and not gender:
        for brand in brands:
            for color in colors:
                for body in bodysizes:
                    filterproducts += womenproducts.filter(brand__brand__iexact=brand, color__color__iexact=color,
                                                           bodysize__size__iexact=body).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
                    filterproducts += manproducts.filter(brand__brand__iexact=brand, color__color__iexact=color,
                                                         bodysize__size__iexact=body).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
                    filterproducts += childproducts.filter(brand__brand__iexact=brand, color__color__iexact=color,
                                                           bodysize__size__iexact=body).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")

    elif brands and colors and not bodysizes and gender:
        for brand in brands:
            for color in colors:
                    for gend in gender:
                        filterproducts += womenproducts.filter(brand__brand__iexact=brand, color__color__iexact=color,
                                                               gender__gender__iexact=gend).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
                        filterproducts += manproducts.filter(brand__brand__iexact=brand, color__color__iexact=color,
                                                             gender__gender__iexact=gend).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
                        filterproducts += childproducts.filter(brand__brand__iexact=brand, color__color__iexact=color,
                                                               gender__gender__iexact=gend).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")

    elif brands and not colors and bodysizes and gender:
        for brand in brands:
                for body in bodysizes:
                    for gend in gender:
                        filterproducts += womenproducts.filter(brand__brand__iexact=brand,bodysize__size__iexact=body,
                                                               gender__gender__iexact=gend).values("id", "slug", "name","brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
                        filterproducts += manproducts.filter(brand__brand__iexact=brand,
                                                             bodysize__size__iexact=body, gender__gender__iexact=gend).values("id", "slug", "name","brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
                        filterproducts += childproducts.filter(brand__brand__iexact=brand,
                                                               bodysize__size__iexact=body, gender__gender__iexact=gend).values("id", "slug", "name","brand__brand", "price", "image","subcategorie__categoriename","gender__gender")

    elif not brands and colors and bodysizes and gender:
            for color in colors:
                for body in bodysizes:
                    for gend in gender:
                        filterproducts += womenproducts.filter(color__color__iexact=color,
                                                               bodysize__size__iexact=body, gender__gender__iexact=gend).values("id", "slug", "name","brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
                        filterproducts += manproducts.filter(color__color__iexact=color,
                                                             bodysize__size__iexact=body, gender__gender__iexact=gend).values("id", "slug", "name","brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
                        filterproducts += childproducts.filter(color__color__iexact=color,
                                                               bodysize__size__iexact=body, gender__gender__iexact=gend).values("id", "slug", "name","brand__brand", "price", "image","subcategorie__categoriename","gender__gender")

    elif brands and colors and not bodysizes and not gender:
        for brand in brands:
            for color in colors:
                        filterproducts += womenproducts.filter(brand__brand__iexact=brand, color__color__iexact=color,
                                                               ).values("id", "slug", "name", "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
                        filterproducts += manproducts.filter(brand__brand__iexact=brand, color__color__iexact=color,
                                                             ).values("id", "slug", "name","brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
                        filterproducts += childproducts.filter(brand__brand__iexact=brand, color__color__iexact=color,
                                                               ).values("id", "slug", "name","brand__brand", "price", "image","subcategorie__categoriename","gender__gender")

    elif brands and bodysizes and not colors and not gender:
        for brand in brands:
                for body in bodysizes:
                        filterproducts += womenproducts.filter(brand__brand__iexact=brand,
                                                               bodysize__size__iexact=body).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
                        filterproducts += manproducts.filter(brand__brand__iexact=brand,
                                                             bodysize__size__iexact=body).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
                        filterproducts += childproducts.filter(brand__brand__iexact=brand,
                                                               bodysize__size__iexact=body).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")

    elif brands and gender and not colors and not bodysizes:
        for brand in brands:
            for gend in gender:
                filterproducts += womenproducts.filter(brand__brand__iexact=brand,gender__gender__iexact=gend).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
                filterproducts += manproducts.filter(brand__brand__iexact=brand,gender__gender__iexact=gend).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
                filterproducts += childproducts.filter(brand__brand__iexact=brand,gender__gender__iexact=gend).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")


    elif colors and bodysizes and not gender and not brands:
            for color in colors:
                for body in bodysizes:
                        filterproducts += womenproducts.filter(color__color__iexact=color,bodysize__size__iexact=body).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
                        filterproducts += manproducts.filter(color__color__iexact=color,bodysize__size__iexact=body).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
                        filterproducts += childproducts.filter(color__color__iexact=color,bodysize__size__iexact=body).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")

    elif colors and gender and not brands and not bodysizes:
            for color in colors:
                for gend in gender:
                        filterproducts += womenproducts.filter(color__color__iexact=color,gender__gender__iexact=gend).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
                        filterproducts += manproducts.filter(color__color__iexact=color,gender__gender__iexact=gend).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
                        filterproducts += childproducts.filter(color__color__iexact=color,gender__gender__iexact=gend).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")



    elif bodysizes and gender and not colors and not brands:
                for body in bodysizes:
                    for gend in gender:
                        filterproducts += womenproducts.filter(bodysize__size__iexact=body, gender__gender__iexact=gend).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
                        filterproducts += manproducts.filter(bodysize__size__iexact=body, gender__gender__iexact=gend).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
                        filterproducts += childproducts.filter(bodysize__size__iexact=body, gender__gender__iexact=gend).values("id", "slug", "name",
                                                                                     "brand__brand", "price", "image","subcategorie__categoriename","gender__gender")


    else:
        filterproducts += womenproducts.all().values("id", "slug", "name","brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
        filterproducts += manproducts.all().values("id", "slug", "name","brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
        filterproducts += childproducts.all().values("id", "slug", "name","brand__brand", "price", "image","subcategorie__categoriename","gender__gender")
    for filterproduct in filterproducts:
        if filterproduct not in cleanfilterproducts:
            cleanfilterproducts.append(filterproduct)
    listtojson = {'filterproducts':cleanfilterproducts}
    return JsonResponse(listtojson)


def userlogin(request):
    if request.user.is_authenticated:
        return redirect('news')
    if request.method == "POST":
        form = LoginUser(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(request, username=username, password=password)
            if user:
                messages.add_message(request, messages.SUCCESS, 'Giriş Başarılı.')
                login(request, user)
                if request.GET.get('next') is not None:
                    next = request.GET.get('next')
                    return redirect(next)
                else:
                    return redirect('news')
            else:
                return render(request, 'pages/login.html', {'form': form})
        else:
            return render(request, 'pages/login.html', {'form': form})
    else:
        form = LoginUser()
        return render(request, 'pages/login.html', {'form': form})


def userregister(request):
    if request.user.is_authenticated:
        return redirect('news')
    if request.method == "POST":
        form = NewUserForm(request.POST)
        if form.is_valid():
            if User.objects.filter(email=form.cleaned_data.get('email')).exists():
                form.add_error('email', 'Bu Email Kullanılıyor.')
                return render(request, 'pages/register.html', {'form': form})
            email = form.cleaned_data.get('email')
            password = form.cleaned_data.get('password1')
            save = form.save(commit=False)
            save.username = email
            save.save()
            user = authenticate(request, username=email, password=password)
            if user:
                login(request, user)
                return redirect("news")
            else:
                return render(request, 'pages/register.html', {'form': form})
        else:
            return render(request, 'pages/register.html', {'form': form})
    else:
        form = NewUserForm()
        return render(request, 'pages/register.html', {'form': form})



@login_required
def orderhistory(request):
    if request.method == 'POST':
        return orderfilter(request)
    else:
        user = User.objects.get(pk=request.user.pk)
        orders = Orders.objects.filter(customerID=user)
        return render(request,'pages/orderhistory.html',{'orders':orders})
@login_required
def orderfilter(request):
    orderfilterlist = []
    value = request.POST.get('selectedvalue')
    startdate = date.today() - timedelta(days=int(value))
    enddate = date.today()
    user = User.objects.get(pk=request.user.pk)
    orders = Orders.objects.filter(customerID=user,date__range=[startdate,enddate])

    for order in orders:
        items = [
            {'product_name': item.product.name,
             'product_brand': item.product.brand.brand,
             'product_color':item.product.color.color,
             'product_body': item.size,
             'product_quantity': item.quantity,
             'product_image': item.product.image.url,
             'product_price': item.price,
             }
            for item in order.orderdetail.all()
        ]
        orderfilterlist.append({
            'date':order.date,
            'orderno':order.pk,
            'orderstatus':order.orderstatus,
            'orderquantity':len(order.orderdetail.all()),
            'buyername':order.name,
            'buyersurname':order.surname,
            'totalprice':order.paymentinformation.totalprice,
            'items':items
        })

    return JsonResponse(orderfilterlist,safe=False)
@login_required
def orderhistorydetail(request,orderID):
    order = Orders.objects.get(pk=orderID,customerID=request.user.pk)
    return render(request,'pages/orderhistorydetail.html',{'order':order})
@login_required
def passchange(request):
    if request.method == "POST":
        form = PasschangeForm(request.user, request.POST)
        if form.is_valid():
            user = form.save()
            update_session_auth_hash(request, user)
            return redirect('news')
        else:
            return render(request, 'pages/passchange.html', {'form': form})
    else:
        form = PasschangeForm(request.user)
        return render(request, 'pages/passchange.html', {'form': form})

@login_required
def userlogout(request):
    messages.add_message(request, messages.SUCCESS, 'Çıkış Başarılı')
    logout(request)
    return redirect('news')

def addcart(request):
    if request.method == 'POST':
        product_id = request.POST.get('product_id')
        product_name = request.POST.get('product_name')
        product_price = request.POST.get('product_price')
        product_brand = request.POST.get('product_brand')
        product_image = request.POST.get('product_image')
        product_size = request.POST.get('product_size')
        quantity = 1
        product_price = float("{:.2f}".format(float(product_price)))
        if 'cart' not in request.session:
            request.session['cart'] = []
        cart = request.session['cart']
        for item in cart:
            if item['product_id'] == product_id and item['product_size'] == product_size:
                item['quantity'] += 1
                item['product_price'] = item['quantity'] * Decimal(product_price)
                item['product_price'] = float("{:.2f}".format(item['product_price']))
                request.session['cart'] = cart
                return JsonResponse({'cart': cart})
        cart.append({
            'product_id': product_id,
            'product_name': product_name,
            'product_price': product_price,
            'product_brand': product_brand,
            'product_image': product_image,
            'product_size': product_size,
            'quantity': quantity
        })
        request.session['cart'] = cart
        return JsonResponse({'cart': cart})
    else:
        return redirect('news')


def removecart(request):
    if request.method == 'POST':
        product_id = request.POST.get('product_id')
        product_size = request.POST.get('product_size')
        cart = request.session['cart']
        items_to_remove = []
        for item in cart:
            if item['product_id'] == product_id and item['product_size'] == product_size:
                items_to_remove.append(item)
        for item in items_to_remove:
            cart.remove(item)
        request.session['cart'] = cart
        return JsonResponse({'cart': cart})
    else:
        return redirect('news')


def quantitypositivecart(request):
    if request.method == 'POST':
        product_id = request.POST.get('product_id')
        product_size = request.POST.get('product_size')
        cart = request.session['cart']
        for item in cart:
            if item['product_id'] == product_id and item['product_size'] == product_size:
                product = item
                unitprice = Decimal(item['product_price']) / item['quantity']
                item['quantity'] += 1
                item['product_price'] = item['quantity'] * Decimal(unitprice)
                item['product_price'] = float("{:.2f}".format(item['product_price']))
                request.session['cart'] = cart
                print(request.session['cart'])
                return JsonResponse({'cart': cart, 'product': product})

        return HttpResponse('İlgili ürün sepette mevcut değil.')
    else:
        return redirect('news')


def quantitynegativecart(request):
    if request.method == 'POST':
        product_id = request.POST.get('product_id')
        product_size = request.POST.get('product_size')
        cart = request.session['cart']
        for item in cart:
            if item['product_id'] == product_id and item['product_size'] == product_size:
                if item['quantity'] <= 1:
                    product = item
                    unitprice = Decimal(item['product_price']) / item['quantity']
                    item['product_price'] = item['quantity'] * Decimal(unitprice)
                    item['product_price'] = float("{:.2f}".format(item['product_price']))
                    request.session['cart'] = cart
                    return JsonResponse({'cart': request.session['cart'], 'product': product})
                else:
                    product = item
                    unitprice = Decimal(item['product_price']) / item['quantity']
                    item['quantity'] -= 1
                    item['product_price'] = item['quantity'] * Decimal(unitprice)
                    item['product_price'] = float("{:.2f}".format(item['product_price']))
                    request.session['cart'] = cart
                    return JsonResponse({'cart': request.session['cart'], 'product': product})

        return HttpResponse('İlgili ürün sepette mevcut değil.')
    else:
        return redirect('news')


def cardcontext(request):
    if 'cart' not in request.session:
        request.session['cart'] = []
    cart = request.session['cart']
    cartcount = len(cart)
    return {'cart': json.dumps(cart), 'cartcount': cartcount}

@login_required
def buycart(request):
    if request.method == "POST":
        formbuy = BuyForm(request.POST)
        formpayment = BuyFormPayment(request.POST)
        if formbuy.is_valid() and formpayment.is_valid():
            total = 0
            cart = request.session['cart']
            formbuysend = formbuy.save(commit=False)
            formpaysend = formpayment.save(commit=False)
            formpaysend.UserId = request.user.pk
            for car in cart:
                total += Decimal(car['product_price'])
            rounded_total = total.quantize(Decimal('0.01'), rounding=ROUND_HALF_UP)
            formpaysend.totalprice = rounded_total
            formpaysend.save()
            formbuysend.customerID = User.objects.get(pk=request.user.pk)
            formbuysend.paymentinformation = formpaysend
            formbuysend.date = datetime.now()
            formbuysend.save()
            for car in cart:
                product_price = Decimal(car['product_price'])
                rounded_price = product_price.quantize(Decimal('0.01'),rounding=ROUND_HALF_UP)
                product = Products.objects.get(pk=car['product_id'])
                orderdetail = OrdersDetail.objects.create(orderID=formbuysend.id, product=product, quantity=car['quantity']
                                            , size=car['product_size'], price=rounded_price)
                formbuysend.orderdetail.add(orderdetail.pk)
            formbuysend.save()
            request.session['cart'] = []
            return redirect('news')
        else:
            return render(request,'pages/productbuy.html',{'form':formbuy,'payment':formpayment})
    else:
        cart = request.session['cart']
        if not cart:
            return render(request,'pages/cartisempty.html')
        form = BuyForm
        payment = BuyFormPayment
        return render(request, 'pages/productbuy.html',
                      {'productbuy': json.dumps(cart), 'form': form, 'payment': payment})

@login_required()
def userinfo(request):
    user = User.objects.get(pk=request.user.pk)
    if request.method == 'POST':
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        emaill = request.POST.get('email')
        form_data = {
            'first_name': first_name,
            'last_name': last_name,
            'email': emaill
        }
        form = UserinfoForm(form_data,instance=user)
        if form.is_valid():
            form.save()
            return JsonResponse({'message': True})
        else:
            return JsonResponse({'message':json.dumps(form.errors)})
    else:
        form = UserinfoForm(instance=user)
        return render(request,'pages/userinfo.html',{'userinfo':form,'last_login':user.last_login})

















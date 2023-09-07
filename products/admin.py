from django.contrib import admin
from .models import Categories,Genders,Brands,Colors,Bodysize,Products,ProductImages
from django.contrib.auth.models import User

admin.site.unregister(User)

@admin.register(Categories)
class CategoriesAdmin(admin.ModelAdmin):
   list_display = ('id', 'categoriename', 'topcategorie')
   list_display_links = ('id', 'categoriename')
   search_fields = ('categoriename','topcategorie__categoriename')
   list_filter = [
       ('topcategorie',admin.RelatedOnlyFieldListFilter)
   ]
   prepopulated_fields = {"slug": ("categoriename",), }
   class Media:
      js = ('js/admin_categories_script.js','js/jquery.js')


class ProductImageInline(admin.TabularInline):
    model = ProductImages

@admin.register(Products)
class ProductsAdmin(admin.ModelAdmin):
    list_display = ('id','name','gender','topcategorie','subcategorie','brand','color','slug','price','createdate')
    list_display_links = ('id','name')
    search_fields = ('name','topcategorie__categoriename','subcategorie__categoriename','brand__brand','color__color')
    prepopulated_fields = {"slug": ("name",), }
    list_filter =[
        ('topcategorie', admin.RelatedOnlyFieldListFilter),
        ('subcategorie', admin.RelatedOnlyFieldListFilter),
        ('brand',admin.RelatedOnlyFieldListFilter),
        ('color',admin.RelatedOnlyFieldListFilter),
        ('gender',admin.RelatedOnlyFieldListFilter),
    ]
    inlines = [ProductImageInline]
    class Media:
      js = ('js/admin_products_script.js','js/jquery.js')


@admin.register(Brands)
class BrandsAdmin(admin.ModelAdmin):
    list_display = ('id','brand')
    list_display_links = ('id','brand')

@admin.register(Colors)
class BrandsAdmin(admin.ModelAdmin):
    list_display = ('id','color')
    list_display_links = ('id','color')

@admin.register(Bodysize)
class BodysizeAdmin(admin.ModelAdmin):
    list_display = ('id','size')
    list_display_links = ('id','size')





@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id','first_name','last_name','email','is_superuser','date_joined')
    search_fields = ('last_name','first_name','email','id')
    list_filter = ('is_superuser','date_joined',)








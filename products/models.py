import os
from django.core.exceptions import ValidationError
from django.db import models

# Create your models here.
class Genders(models.Model):
    gender = models.CharField(max_length=10,null=False,blank=False,unique=True)
    def __str__(self):
        return  f"{self.gender}"
class Brands(models.Model):
    brand = models.CharField(max_length=100,null=False,blank=False,unique=True)
    def __str__(self):
        return f"{self.brand}"
class Colors(models.Model):
    color = models.CharField(max_length=100,null=False,blank=False,unique=True)
    def __str__(self):
        return f"{self.color}"
class Bodysize(models.Model):
    size = models.CharField(max_length=10,null=False,blank=False,unique=True)
    def __str__(self):
        return f"{self.size}"


class Categories(models.Model):
    categoriename = models.CharField(max_length=100,null=False,blank=False,unique=True)
    gender = models.ManyToManyField(Genders,blank=False)
    topcategorie = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='children')
    slug = models.SlugField(blank=False, null=False, db_index=True,unique=True)
    def __str__(self):
        return f"{self.categoriename}"


def get_upload_path(instance, filename):
    hour = instance.createdate.strftime("%H-%M-%S")
    product_folder = f'{instance.name}_{instance.createdate.date()}_{hour}'
    path = ''
    if instance.gender.gender == "erkek":
      path = 'imageman'
    if instance.gender.gender == "kadin":
      path = 'imagewomen'
    if instance.gender.gender == "cocuk":
      path = 'imagechild'
    return os.path.join(path, product_folder, filename)

class Products(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    brand = models.ForeignKey(Brands,blank=False, null=False,on_delete=models.CASCADE)
    color = models.ForeignKey(Colors,blank=False,null=False,on_delete=models.CASCADE)
    bodysize = models.ManyToManyField(Bodysize, blank=False,null=False)
    price = models.DecimalField(blank=False, null=False,decimal_places=2,max_digits=10)
    gender = models.ForeignKey(Genders,blank=False,null=False,on_delete=models.CASCADE)
    topcategorie = models.ForeignKey(Categories, blank=False, null=False, on_delete=models.CASCADE,related_name='child_categories')
    subcategorie = models.ForeignKey(Categories, blank=True, null=True, on_delete=models.CASCADE,related_name='parent_categories')
    slug = models.SlugField(blank=False,null=False,unique=True,db_index=True)
    createdate = models.DateTimeField()
    image = models.FileField(upload_to=get_upload_path)
    def __str__(self):
        return f"Product_ID: {self.pk} — {self.name}"


def get_upload_path_IMAGESINLINE(instance,filename):
    hour = instance.product.createdate.strftime("%H-%M-%S")
    product_folder = f'{instance.product.name}_{instance.product.createdate.date()}_{hour}'
    path = ''
    if instance.product.gender.gender == "erkek":
        path = 'imageman'
    if instance.product.gender.gender == "kadin":
        path = 'imagewomen'
    if instance.product.gender.gender == "cocuk":
        path = 'imagechild'
    return os.path.join(path, product_folder, filename)

class ProductImages(models.Model):
    product = models.ForeignKey(Products,related_name='images',on_delete=models.CASCADE)
    image = models.FileField(upload_to=get_upload_path_IMAGESINLINE)



















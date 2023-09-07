from django.db import models

# Create your models here.
class Navbarcolor(models.Model):
    color = models.CharField(max_length=50,blank=False,null=False,unique=True)
    def __str__(self):
        return f"{self.color}"
class Bgcolor(models.Model):
    color = models.CharField(max_length=50,blank=False,null=False,unique=True)
    def __str__(self):
        return f"{self.color}"
class İnterfacesettings(models.Model):
    webpagename = models.CharField(max_length=50,blank=False,null=False)
    title = models.CharField(max_length=50,blank=False,null=False)
    navbarcolor = models.ForeignKey(Navbarcolor,on_delete=models.CASCADE)
    bgcolor = models.ForeignKey(Bgcolor,on_delete=models.CASCADE)
    def __str__(self):
        return f"{self.webpagename} arayüz yapılandırması"

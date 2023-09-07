from django.contrib import admin
from .models import İnterfacesettings,Navbarcolor,Bgcolor



@admin.register(İnterfacesettings)
class InterfacesettingsAdmin(admin.ModelAdmin):
    list_display = ('webpagename','title','navbarcolor','bgcolor')
    def has_add_permission(self, request):
        if self.model.objects.count() > 0:
            return False
        return True

@admin.register(Navbarcolor)
class NavbarcolorAdmin(admin.ModelAdmin):
    list_display = ('id','color')

@admin.register(Bgcolor)
class BgcolorAdmin(admin.ModelAdmin):
    list_display = ('id','color')

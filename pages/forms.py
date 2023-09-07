from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm,PasswordChangeForm
from django.contrib.auth.models import User
from django.forms import widgets
from orders.models import Orders,CreditCarts


class LoginUser(AuthenticationForm):
     def __init__(self,*args,**kwargs):
         super().__init__(*args,**kwargs)
         self.fields["username"].widget = widgets.TextInput(attrs={'class':'form-control','style':'height:50px'})
         self.fields["password"].widget = widgets.PasswordInput(attrs={'class':'form-control','style':'height:50px'})


class NewUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ('email','first_name','last_name')
    def __init__(self,*args,**kwargs):
        super().__init__(*args, **kwargs)
        self.fields["password1"].widget = widgets.PasswordInput(attrs={'class': 'form-control'})
        self.fields["password2"].widget = widgets.PasswordInput(attrs={'class': 'form-control'})
        self.fields["email"].widget = widgets.EmailInput(attrs={'class': 'form-control'})
        self.fields["email"].required = True
        self.fields["first_name"].widget = widgets.TextInput(attrs={'class': 'form-control'})
        self.fields["first_name"].required = True
        self.fields["last_name"].widget = widgets.TextInput(attrs={'class': 'form-control'})
        self.fields["last_name"].required = True









class PasschangeForm(PasswordChangeForm):
      def __init__(self,*args,**kwargs):
          super().__init__(*args,**kwargs)
          self.fields['old_password'].widget = widgets.PasswordInput(attrs={'class':'form-control'})
          self.fields['new_password1'].widget = widgets.PasswordInput(attrs={'class':'form-control'})
          self.fields['new_password2'].widget = widgets.PasswordInput(attrs={'class':'form-control'})



class BuyForm(forms.ModelForm):
    class Meta:
        model = Orders
        fields =('name','surname','address','apartment','postcode','province','district','number','cargo')
        labels = {'name':'İsim','surname':'Soyisim','address':"Adres",'apartment':'Apartman','postcode':'Posta Kodu'
                  ,'province':'İl','district':'İlçe','number':'Telefon','cargo':'Kargo'}
        widgets = {
            "name":widgets.TextInput(attrs={"class":"form-control","placeholder":'Ad',"style":"height:50px;width:292px;"}),
            "surname":widgets.TextInput(attrs={"class":"form-control","placeholder":'Soyad',"style":"height:50px;width:292px;"}),
            "address": widgets.Textarea(attrs={"class": "form-control","placeholder":'Adres', "style":"height:75px;width:604px;"}),
            "apartment":widgets.TextInput(attrs={"class":"form-control","placeholder":'Apartman, Daire, vb.',"style":"height:50px;width:292px;"}),
            "postcode":widgets.TextInput(attrs={"class":"form-control","placeholder":'Posta Kodu',"style":"height:50px;width:292px;"}),
            "province": widgets.Select(attrs={"class": "form-select","style":"height:50px;width:292px;","placeholder":"İl"}),
            "district": widgets.Select(attrs={"class": "form-select","style":"height:50px;width:292px;","placeholder":"ilçe"}),
            "number":widgets.TextInput(attrs={"class":"form-control","style":"height:50px;width:604px;","placeholder":"Telefon","inputmode":"numeric"}),
            "cargo":widgets.RadioSelect(attrs={"placeholder":"Kargo"}),

        }
        error_messages = {
            "name": {
                "required": "isim girmelisiniz.",
                "max_length": "maksimum 50 karakter girmelisiniz.",
            },
            "surname":{
                "required": "soyisim girmelisiniz.",
                "max_length": "maksimum 50 karakter girmelisiniz.",
            },
            "province": {
            "required": "il girmelisiniz.",
            "max_length": "maksimum 20 karakter girmelisiniz.",
        },
            "district": {
                "required": "ilçe girmelisiniz.",
                "max_length":"maksimum 20 karakter girmelisiniz.",
            },
            "address": {
                "required": "Adres girmelisiniz.",
                "max_length": "maksimum 150 karakter girmelisiniz.",
            }

        }

class BuyFormPayment(forms.ModelForm):
    class Meta:
        model = CreditCarts
        fields =('cardholder_name','cartnumber','expiration_date','cvv')
        labels = {'cardholder_name':'kart üzerindeki isim','cartnumber':'kart numarası','expiration_date':'son kullanma tarihi','cvv':'cvv'}
        widgets = {
            "cardholder_name":widgets.TextInput(attrs={"class":"form-control","placeholder":'Kart Üzerindeki İsim',"style":"height:50px;width:604px;"}),
            "cartnumber":widgets.TextInput(attrs={"class":"form-control","placeholder":'Kart Numarası',"style":"height:50px;width:604px;"}),
            "expiration_date": widgets.Input(attrs={"class": "form-control","placeholder":'Ay / Yıl', "style":"height:50px;width:292px;"}),
            "cvv":widgets.TextInput(attrs={"class":"form-control","placeholder":'CVV',"style":"height:50px;width:292px;"}),


        }

class UserinfoForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super(UserinfoForm, self).__init__(*args, **kwargs)
        self.fields['first_name'].required = True
        self.fields['last_name'].required = True
        self.fields['email'].required = True
    class Meta:
        model = User
        fields =('first_name','last_name','email')
        labels ={'first_name':'Ad','last_name':'Soyad','email':'E-mail',}
        widgets = {
            "first_name": widgets.TextInput(attrs={"class": "form-control", "style": "height:50px;width:300px;"}),
            "last_name": widgets.TextInput(attrs={"class": "form-control", "style": "height:50px;width:300px;"}),
            "email": widgets.TextInput(attrs={"class": "form-control", "style": "height:50px;width:625px;"}),
        }















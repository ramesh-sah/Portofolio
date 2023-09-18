from django.contrib import admin
from enquiry.models import Enquiry

# Register your models here.
class enquiry(admin.ModelAdmin):
    list_display=['name','email','message']
    
admin.site.register(Enquiry,enquiry)

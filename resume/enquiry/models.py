from django.db import models

# Create your models here.
class Enquiry(models.Model):
    name=models.CharField(max_length=60)
    email=models.EmailField(max_length=60)
    message=models.TextField(max_length=90)
    

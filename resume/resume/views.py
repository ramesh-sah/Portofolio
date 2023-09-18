from pyexpat.errors import messages
from django.shortcuts import render , redirect
from enquiry.models import Enquiry


def Home(request):
    if request.method =='POST':
        name=request.POST.get('name')
        email=request.POST.get('email')
        message=request.POST.get('message')
        if not Enquiry.objects.filter(email=email).exists():
            obj=Enquiry(name=name,email=email,message=message)
            obj.save()
            return redirect('home')
        else:
            return redirect('home')
            
    return render(request, 'index.html')



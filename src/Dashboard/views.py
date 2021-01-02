from django.shortcuts import render

# Create your views here.

def dashboard_view(request):
    context = {
        'web_title': 'DashboarView'
    }
    return render(request,"home.html",context)
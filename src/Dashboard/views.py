from django.shortcuts import render
from kafka import  KafkaConsumer
import json 

# Create your views here.

def dashboard_view(request):
    context = {
        'web_title': 'DeepViewer'
    }
    return render(request,"home.html",context)

def manager_consummer(request):
    consumer = KafkaConsumer(
        "jetson-topic",
        bootstrap_servers=['192.168.0.2:9092'],
        auto_offset_reset = 'earliest',
    )

    for msg in consumer:
        print(f"Registered User {json.loads(msg.value)}")
    return render(request, "home.html",consumer)
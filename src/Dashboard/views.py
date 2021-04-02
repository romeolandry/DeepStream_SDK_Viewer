from django.http import HttpResponse
from django.shortcuts import render
from kafka import  KafkaConsumer
import json
import time
import threading

# Create your views here


def dashboard_view(request):
    context = {
        'web_title': 'DeepViewer',
        'topic': "consumer"
    }
    return render(request,"home.html",context)
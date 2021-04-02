from django.urls import path
from .consumers import KafkaConsummerGraph


ws_urlpatterns = [
    path('ws/consumer/', KafkaConsummerGraph.as_asgi())
]

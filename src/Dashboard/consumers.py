from channels.generic.websocket import WebsocketConsumer

from kafka import  KafkaConsumer
import json
import time

class KafkaConsummerGraph(WebsocketConsumer):
    # overide connected method
    # to accept all connection that come from the browser
    def connect(self):
        self.accept()

        # Consume Kafka message from consummer
        consumer = KafkaConsumer(
            "jetson-topic",
            bootstrap_servers=['192.168.0.2:9092'],
            auto_offset_reset = 'latest',
            )
        
        for msg in consumer:
            # convert bites to json
            json_msg = json.loads(msg.value)
            # skip oder key and just Object keys.
            # it content the tracked object
            trackObject = json_msg['object']
            self.send(json.dumps(trackObject))
            time.sleep(10)

    
    
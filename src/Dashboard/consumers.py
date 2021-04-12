import json

from kafka import  KafkaConsumer
from asyncio import sleep
from decouple import config
#from time import sleep

# from channels.generic.websocket import WebsocketConsumer
from channels.generic.websocket import AsyncWebsocketConsumer
class KafkaConsummerGraph(AsyncWebsocketConsumer):
    # overide connected method
    # to accept all connection that come from the browser
    async def connect(self):
        await self.accept()

        # Consume Kafka message from consummer
        consumer = KafkaConsumer(
            "jetson-topic",
            bootstrap_servers=[config("BOOTSTRAP_SERVERS")],
            auto_offset_reset = config("AUTO_OFFSET_RESET"),
            )
        
        for msg in consumer:
            # convert bites to json
            json_msg = json.loads(msg.value)
            # skip oder key and just Object keys.
            # it content the tracked object
            trackObject = json_msg['object']
            await self.send(json.dumps(trackObject))
            await sleep(1)

    
    
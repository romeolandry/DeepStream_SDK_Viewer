'use strict'


/* 
    Instance of Web Socket class
    with Url to send Request to 
    its should be the same as
    the one defined in to 
    Dashboard.routing
 */
var socket = new WebSocket('ws://localhost:8000/ws/consumer/');

/* define the on message method */
socket.onmessage = function(e){
    var consumerMessage = JSON.parse(e.data);
    for(let prop in consumerMessage ){
        console.log(prop)
        console.log(consumerMessage[prop])
    } 
}

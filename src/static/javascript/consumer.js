'use strict'

var ctx = document.getElementById('myChart').getContext('2d');

var graphData =  {
    type: 'bar',
    data: {
        labels: ['Person', 'vehicle', 'Cell Phone'],
        datasets: [{
            label: 'Jetson Monitoring Count Object',
            data: [0, 0, 0,0],
            backgroundColor: [
                'rgba(73, 198, 230, 0.5)',
            ],
            
            borderWidth: 1
        }]
    },
    options: {}
}

var myChart = new Chart(ctx,graphData);

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
     
    var newGraphData = graphData.data.datasets[0].data;   

    /* newGraphData.shift(); */

    for(let prop in consumerMessage ){
        /* console.log(prop) */
        
        if (prop == "person")
            /* newGraphData.push(consumerMessage[prop].confidence*100)
            console.log(prop)
            console.log(consumerMessage[prop].confidence) 
            console.log(consumerMessage[prop].confidence)
            console.log("person")*/
            newGraphData[0] = newGraphData[0] +1
        
        if (prop == "vehicle")
        {
            newGraphData[1] = newGraphData[1] +1
            console.log(consumerMessage[prop].confidence)
        }
        if (prop == "cell phone")
        {
            newGraphData[2] = newGraphData[2] +1
        }


    }
    graphData.data.datasets[0].data = newGraphData
    myChart.update()
}

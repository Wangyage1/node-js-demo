

const client = require('net').connect({
    port: 60300
});

var buffer = '';
client.on('data', data => {
    buffer+= data;
    let boundary = buffer.indexOf('\n');
    console.log('buffer', buffer.toString());
    while(boundary !== -1) {
        const input = buffer.substring(0, boundary);
        buffer = buffer.substring(boundary + 1);
        console.log('message', JSON.parse(input));
        boundary = buffer.indexOf('\n');
    }
})


// const ldjClient = require('./lib/ldj-client.js').connect(client);

// ldjClient.on('message', message => {
    
//     console.log('接收到消息吗');
//     if (message.type === 'watching') {
//         console.log(`Now watching: ${message.file}`);
//     } else if (message.type === 'changed') {
//         const date = new Date(message.timestamp);

//         console.log(`File changed: ${date}`);
//     } else {
//         console.log(`Unrecongized message type: ${message.type}`);
//     }
// })


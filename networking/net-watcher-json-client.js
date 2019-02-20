

const client = require('net').connect({
    port: 60300
});

const ldjClient = require('./lib/ldj-client.js').connect(client);

ldjClient.on('message', message => {
    
    console.log('接收到消息吗');
    if (message.type === 'watching') {
        console.log(`Now watching: ${message.file}`);
    } else if (message.type === 'changed') {
        const date = new Date(message.timestamp);

        console.log(`File changed: ${date}`);
    } else {
        console.log(`Unrecongized message type: ${message.type}`);
    }
})
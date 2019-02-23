

const zmq = require('zeromq');

const subscriber = zmq.socket('sub');

subscriber.subscribe('');//接收所有的消息

subscriber.on('message', data => {
    const message = JSON.parse(data);
    const date = new Date(message.timestamp);
    console.log(`File ${message.file} changed at ${date}`);
});

subscriber.connect('tcp://127.0.0.1:60400');
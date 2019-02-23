
const fs = require('fs');
const zmq = require('zeromq');
const filename = process.argv[2];

//创建一个消息发布节点
const publisher = zmq.socket('pub');

fs.watch(filename, () => {

    publisher.send(JSON.stringify({
        type: 'changed',
        file: filename,
        timestamp: Date.now()
    }))
})

publisher.bind('tcp://*:60400', err => {

    console.log('Listening for zmq');
})

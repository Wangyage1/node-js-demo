

const zmq = require('zeromq');
const filename = process.argv[2];

const requester = zmq.socket('req');
requester.on('message', data => {
    const response = JSON.parse(data);
    console.log('Received response:', response);
})

requester.connect('tcp://127.0.0.1:60401');

//send a request for content
for (let i = 0; i< 5; i++) {
    console.log(`Sending a request for ${filename}`);
    requester.send(JSON.stringify({path: filename}));
}




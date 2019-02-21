

const fs = require('fs');
const net = require('net');
const filename = process.argv[2];

if (!filename) {
    console.log('文件不存在！');
    return;
}

const server = net.createServer((connection) => {
    console.log('已建立连接');
    connection.write(JSON.stringify({type: 'watching', file: filename} + '\n'));

    const watcher = fs.watch(filename, () => {
        connection.write(JSON.stringify({type: 'changed', timestamp: Date.now()}) + '\n');
    })


    connection.on('close', () => {
        console.log('连接关闭');
        watcher.close();
    })
});

server.listen(60300, () => {
    console.log('server is listening 60300');
})
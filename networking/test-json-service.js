

//模拟nodejs把一条消息拆分成两个来发送
const server = require('net').createServer(connection => {

    console.log('已建立连接');

    //把消息拆分成两条
    const firstChunk = '{"type": "changed", "timesta';
    const secondChunk = 'mp": 1450694370094}\n';

    connection.write(firstChunk);

    const timer = setTimeout(() => {
        connection.write(secondChunk);
        connection.end();
    }, 100);

    connection.on('end', () => {
        clearTimeout(timer);
        console.log('连接关闭');
    })


});

server.listen(60300, () => {
    console.log(`监听60300端口`);
})
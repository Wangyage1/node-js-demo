
const fs = require('fs'); //引入fs模块
const filename = process.argv[2]; //获取要监听的文件

//process.argv 访问命令行输入的参数

if(!filename) {
    throw Error('a file to watch must be specified');
}

fs.watch(filename, () => {
    console.log(`file ${filename} changed!`);
});

//fs.watch(文件名，监听文件内容变化后要执行的回调函数)

console.log(`now watching ${filename} for changes ...`);



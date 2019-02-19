
'use strict';
const fs = require('fs');

//判断文件是否存在

fs.stat('target.txt', (err, stat) => {
    if(err) {
        console.log(err);
        return;
    }

    fs.watch('target.txt', (eventType, filename) => {
    
        console.log('file changed!');
    })
})


console.log('now watching target.txt for changes ...');
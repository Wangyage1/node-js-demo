require('fs').createReadStream(process.argv[2])
.on('data',  (chunk) => {
    process.stdout.write(chunk)
}).on('err', (err) => {
    console.log(err);
})
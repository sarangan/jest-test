process.env.UV_THREADPOOL_SIZE = 1;

const cluster = require('cluster');
const express = require('express');
const crypto = require('crypto');

const app = express();

function doWork(){
    let start = Date.now();
    while(Date.now() - start < 10000){
    }
    console.log('existing time out');
}

if(cluster.isMaster){
    console.log("master worker");
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
    // cluster.fork();

}
else{
    console.log("slave worker");

    app.get('/', (req, res) =>{
        // doWork();
        // res.send("Hello master");
        crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
            if (err) throw err;
            res.send(derivedKey.toString());
        });
    });

    app.get('/fast', (req, res) =>{
        res.send("Hello fast");
    });

    app.listen(8080, () => {
        console.log(`Server started on port ${8080}`);
    });
}
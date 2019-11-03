const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const t = Date.now();

function callHttps(){
    https.request("https://www.google.com", (res) =>{
        let s = '';
        res.on('data', (g)=>{
            s += g;
        });
        res.on('end', ()=>{
            console.log("http T ", Date.now() - t);
            //console.log(s);
        });
    }).end();
}

function doHash(n){
    crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
        if (err) throw err;
        console.log(`Hash ${n} t `, Date.now() - t);
      });
}


callHttps();
// callHttps();
// callHttps();
// callHttps();
// callHttps();
// callHttps();

fs.readFile('./package.json', (err, content) =>{
    console.log('file t ', Date.now() - t);
})

doHash(1);
doHash(2);
doHash(3);
doHash(4);
doHash(5);
doHash(6);
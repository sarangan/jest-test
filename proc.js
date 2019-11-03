process.env.UV_THREADPOOL_SIZE = 2;

const crypto = require('crypto');

const t = Date.now();


const s = Math.round(102.7, 10);
console.log(s);
console.log('sp ', Date.now() - t);

setTimeout(function s(){
    console.log('timer ', Date.now() - t);
}, 300);

crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log('1 ', Date.now() - t);
});

crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err;
    console.log('2 ', Date.now() - t);
});


crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err;
    console.log('3 ', Date.now() - t);
});

crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err;
    console.log('4 ', Date.now() - t);
});

crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err;
    console.log('5 ', Date.now() - t);
});

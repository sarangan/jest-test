const crypto = require("crypto");
const util = require('util');


crypto.pbkdf2("123","abc", 100, 512, "sha512", (err, derivedKey) =>{
    if(err) throw err;
    //console.log(derivedKey.toString('hex'));
});

console.log("-----");

( async function pbkdf2Fn(){
    const pbkdf2 = util.promisify(crypto.pbkdf2);
    try{
        const derivedKey = await pbkdf2("123", "abc", 1000, 512, "sha512");
        console.log(derivedKey.toString('hex'));
    }
    catch(e){
        console.log(e)
    }
    
}());

function forEach(items, callback){

    for(let i = 0, l = items.length; i < l; i++){
        callback(items[i]);
    }
}


forEach([1,2], (item)=>{
    console.log(item);
});


module.exports = forEach;

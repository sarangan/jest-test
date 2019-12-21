const util = require('util');
const fs = require('fs');

// fs.readFile('test.txt', (err, data)=>{
//     if(err) throw new Error('Error ' + err);
//     console.log(data.toString());
// });

function a(){
    const s = util.promisify(fs.readFile);
    return s;
}


async function b(){
    try{
        const b = a();
        const c = await b('test.txt');
        console.log(c.toString());
    }
    catch(ex){
        console.log(ex);
    }
    
}


b();

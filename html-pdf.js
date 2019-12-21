var pdf = require('html-pdf');
const util = require('util');
var options = { format: 'Letter' };

const html = "<!DOCTYPE html><html><title>HTML Tutorial</title><body><h1>This is a heading</h1><p>This is a paragraph.</p></body></html>";

// pdf.create(html, options).toFile('./mypdf.pdf', function(err, res) {
//     if (err) return console.log(err);
//     console.log(res); // { filename: '/app/businesscard.pdf' }
// });

function a(){
    const s = util.promisify(pdf.create(html, options).toFile);
    return s;
}

async function b(){
    try{
        const k = util.promisify(pdf.create(html, options).toFile);
        const c = await k('./mypdf.pdf');
        console.log(c);
    }
    catch(ex){
        console.log(ex);
    }
}

b();
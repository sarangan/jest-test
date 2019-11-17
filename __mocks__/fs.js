const fs = jest.genMockFromModule('fs');

fs.readFile = function(){
    console.log("IT came here !!!!");
    return "read me ";
};

module.exports = fs;
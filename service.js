const model = require('./model');

const getUsers = async (req, res) =>{
    try{
        const users = await model.find("users", {name: /^saran/});
        res.json(users);
    }
    catch(ex){
        throw ex;
    }
    
}

module.exports = {
    getUsers
}
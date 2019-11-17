var rp = require('request-promise');

module.exports = {

    getUsers(){
        return rp.get({ uri: 'https://jsonplaceholder.typicode.com/todos/1', json: true});
    }
}
const { MongoClient } = require('mongodb');
const conntionUrl = "mongodb://localhost:27017";

const connect = async () =>{
    return MongoClient.connect(conntionUrl, { useNewUrlParser: true, useUnifiedTopology: true});
}

module.exports = {
    connect,
}
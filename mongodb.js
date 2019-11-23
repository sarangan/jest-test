const mongodb = require('mongodb');

const mongoClient = mongodb.MongoClient;

const conntionUrl = "mongodb://localhost:27017";
const database = "track-manager";

mongoClient.connect(conntionUrl, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client)=>{
    if(err){
        throw err;
    }
    console.log('connected');

    const db = client.db(database);
    db.collection("users").insertOne({
        name: "saran",
        age: 12
    });

});
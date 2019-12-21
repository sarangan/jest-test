const {MongoClient, ObjectID} = require('mongodb');
const conntionUrl = "mongodb://localhost:27017";
const database = "trimmers";

MongoClient.connect(conntionUrl, { useNewUrlParser: true, useUnifiedTopology: true}, async(err, client)=>{
    if(err){
        throw err;
    }
    console.log('connected');

    const db = client.db(database);
    const s = await db.collection("users").insertOne({
        name: "sarangan",
        age: 21,
    });
    console.log(s);

});
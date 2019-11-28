const {MongoClient, ObjectID} = require('mongodb');
const conntionUrl = "mongodb://localhost:27017";
const database = "users";

MongoClient.connect(conntionUrl, { useNewUrlParser: true, useUnifiedTopology: true}, async (err, client)=>{
    if(err){
        throw err;
    }
    console.log('connected');

    const db = client.db(database);
    // db.collection("users").insertOne({
    //     name: "sarangan",
    //     age: 21,
    //     claimid: 1
    // }, (err, result) =>{
    //     console.log(result.ops);
    // });

    const ss = await db.collection("users").findOneAndUpdate(
        {claimid: 3},
        {
            $set: {
                name: "sassra",
                age: 12,
                claimid: 3
            }
        },
        {
            upsert: true,
            returnOriginal: false
        });
    
        console.log(ss);

});
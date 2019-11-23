const {MongoClient, ObjectID} = require('mongodb');
const conntionUrl = "mongodb://localhost:27017";
const database = "track-manager";

const objectid = new ObjectID();
console.log(objectid);
console.log(objectid.getTimestamp());
console.log(objectid.id);
console.log(objectid.id.length);
console.log(objectid.toHexString().length);

MongoClient.connect(conntionUrl, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client)=>{
    if(err){
        throw err;
    }
    console.log('connected');

    const db = client.db(database);
    db.collection("users").insertOne({
        name: "sarangan",
        age: 21,
        _id: objectid
    }, (err, result) =>{
        console.log(result.ops);
    });

    db.collection("users").insertMany([
        {
            name: "sur",
            age: 22
        },
        {
            name: "lar",
            age: 33,
            manual: true
        }
    ], (err, result)=>{
        console.log(result.insertedCount);
    });

    db.collection("users").findOne({_id: new ObjectID(objectid) }, (err, result) =>{
        if (err) throw err;
        console.log(result);
    });

    db.collection("users").find({name: /^saran/}).toArray( (err, result) =>{
        if(err){
            throw err;
        }

        console.log(result);
    });

    db.collection("users").find({name: /^saran/}).count( (err, count) =>{
        if(err) throw err;
        console.log(count);
    });

    db.collection("users").updateOne({_id: objectid}, {
        $set: {
            name: 'saran'
        },
        $inc: {
            age : 100
        }
    }).then(result =>{
        console.log(result.modifiedCount);
    })
    .catch( err =>{
        throw err;
    });

    db.collection("users").updateMany({manual: true}, {
        $set: {
            manual: false,
            use: true
        }
    }).then(result =>{
        console.log(result.modifiedCount);
    }).catch(err =>{
        throw err;
    });

    db.collection("users").deleteMany({ age : { $gt: 100 }}).then(result =>{
        console.log(result.deletedCount);
    }).catch(err =>{
        console.log(err);
    });

});
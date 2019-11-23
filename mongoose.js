const mongose = require('mongoose');

mongose.connect("mongodb://localhost:27017/tasks", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
});

const User = mongose.model("User", {
    name: {
        type: String
    },
    age: {
        type: Number
    }
});

const saveMe = new User({
    name: "sara",
    age: 12
});

saveMe.save().then( () => {
    console.log(saveMe);
}).catch(err => {throw err} );
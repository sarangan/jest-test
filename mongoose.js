const mongose = require('mongoose');
const validator = require('validator');

mongose.connect("mongodb://localhost:27017/tasks", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
});

const User = mongose.model("User", {
    name: {
        type: String,
        required: true,
        default: "sss",
        trim: true,
        lowercase: true
    },
    age: {
        type: Number,
        validate(value){
            // if(!validator.isPostalCode(value)){
            //     throw new Error("must be number");
            // }
            // else 
            if(value < 0){
                throw new Error("age cannot be negative");
            }
        }
    }
});

const saveMe = new User({
    name: "SSSara ",
    age: 12
});

saveMe.save().then( () => {
    console.log(saveMe);
}).catch(err => {throw err} );
const express = require('express');
const router = express.Router();
const services = require('./service');

router.route('/users/:id')
.all( (req, res, next) =>{
    console.log(`getting request ${req.method}`);
    next();
})
.get( (req, res) =>{
    return res.status(200).json([
        {
            name: 'sara',
            age: 12
        },
        {
            name: 'samsung',
            age: 30
        }
    ]);
})
.post( (req, res) =>{
    return res.status(201).json(req.body);
})
.put( (req, res) =>{
    return res.send(req.params.id);
})
.delete( (req, res) =>{
    return res.status(501).send("not deleted");
});


router.get('/getuser', (req, res, nextFunc) =>{
    console.log('get users middle');
    throw new Error("token error");
    nextFunc();
}, (req, res) =>{
    res.send("I am okay to be second middle ware");
});

router.get('/api/users', (req,res) =>{
    services.getUsers(req,res);
});

function logErrors (err, req, res, next) {
    console.log("err.stack");
    console.error(err.stack);
    //next(err);
    res.status(500).send("error man");
}

router.use(logErrors)
module.exports = router;
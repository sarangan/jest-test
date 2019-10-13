const express = require('express');
const router = express.Router();

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


module.exports = router;
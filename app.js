const express = require('express');
const app = express();
const router = require('./router');

app.get('/up', (req, res) =>{
    res.status(200).send("hello");
});

app.use(express.static('/public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(router);

module.exports = app;
const express = require('express');
const app = express();
const router = require('./router');

app.get('/up', (req, res) =>{
    res.status(200).send("hello");
});

app.use(express.static('/public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get('/man/:id', function (req, res, next) {
    console.log('ID:', req.params.id);
    next();
  }, function (req, res, next) {
    if (req.params.id === '12') 
        next('route');
    else{
        res.send('User Info');
        next();
    }
  });
  
  // handler for the /user/:id path, which prints the user ID
  app.get('/man/:id', function (req, res, next) {
      console.log("i came here too?");
      res.end(req.params.id);
  });

app.use(router);

module.exports = app;
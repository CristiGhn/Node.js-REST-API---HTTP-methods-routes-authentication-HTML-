var express = require('express');
var app = express();
var port = 8080;

var router = express.Router();
var routerLog = express.Router();

router.use(function(req, res, next){

    console.log(req.method, req.url);

    next();
});

router.get('/home', function(req, res){
    res.send('This is the home page');
});

router.get('/about', function(req, res){
    res.send('This is the about page');
});

router.param('name', function(req, res, next, name) {

    // Verify IF the name starts with a letter
    // Verify IF movie exists in the database
    // ... 
    req.name = name;

    next();
});

router.get('/movie/:name', function(req, res){
    console.log(req.name);
    res.send('I want to search for the movie called: ' + req.name);
});

routerLog.get('/home', function(req,res){
    console.log('Log home page');
});

app.use('/api', router);
app.use('/log', routerLog);

// Multiple routes on the same endpoint
router.route('/login')
    .get(function(req, res){
        res.send('The current logged in user');
    })

    .post(function(req, res){
        res.send('This will be the login HTML form');
    })

app.listen(port);
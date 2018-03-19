var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');
var port = 8080;

app.listen(port);

// Routes here (simple route)
var router = express.Router();

let APP_SECRET = "gL2$3E<AK,n.XuP`uwnZ]'_:Wwbne#";

router.get('/authenticate', function(req, res){

    let query = req.query;
    let user = query.user;
    let password = query.password;

    if (user == 'admin' && password == 'admin') {

        const header = {
            'alg' : 'HS256'
        };
    
        const payload = {
            admin : 'admin'
        }
    
        var token = jwt.sign(payload, APP_SECRET, {
            expiresIn: 60*60,
            header : header
        });

        res.json({
            succes: true,
            token : token
        });

    } else {
        res.json({
            succes: false,
            message: 'Credentials wrong'
        })
    }
});

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6ImFkbWluIiwiaWF0IjoxNTIxMTMyNjUxLCJleHAiOjE1MjExMzYyNTF9.A7JNrFPsRCJ2Nm3KhrYjEGi-FsCN-Na_EXVgpf2rM-o

router.use(function(req, res, next){

    var token = req.query.token;

    if (token) {

        jwt.verify(token, APP_SECRET, function(err, decoded){

            if (err) {

                res.status(403).send({
                    succes: false,
                    message: 'Token is not valid'
                })
                
            } else {

                // Forward to the desired endpoint
                next();
            }

        });

    } else {

        res.status(500).send({
            succes: false,
            message: 'Token was not provided'
        })
    }

});

						
router.get('/profile', function(req, res){
    res.send('I will see my profile with likes, stuff bought, interests');
});

app.use('/api', router);
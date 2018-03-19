console.log("Hello from express");

// PART 1
var express = require("express");
var app = express();
var url = require('url');

app.get('/', function(req, res){
    res.send("Hello in the web");
});

app.get('/login', function(req, res){
    res.send("Login form");
});

// PART 2
var movies = require('./movies.json');
app.get('/movies', function(req, res) {
    res.send(movies);
});

app.get('/movies/title', function(req, res) {
   var titles = [] // init empty array
   
   for (var i=0; i < movies.length; i++) {
       var movie = movies[i];
       titles[i] = movie.title;
   }

   res.send(titles);
});

app.get('/movies/grossing', function(req, res) {
    var grossingArray = [] // init empty array
    
    for (var i=0; i < movies.length; i++) {
        var movie = movies[i];
        grossingArray[i] = movie.grossing;
    }
 
    res.send(grossingArray);
 });

 // GET - READ
 app.get('/movies/create', function(req, res) {
    
    //title=Furious%207&grossing=1516045911&year=2015&genre=Action
    var urlParts = url.parse(req.url, true);
    var query = urlParts.query;
    
    var moviesCount = movies.length;
    movies[moviesCount] = query;

    res.send(movies);
 });

 var bodyParser = require('body-parser');
 app.use(bodyParser.urlencoded({
     extended : true
 }));

 // POST - CREATING NEW OBJECTS
 app.post('/movies/create', function(req,res){
    // title : Furious 7
    // genre: Action
    // grossing : 1516045911
    // year: 2015
    let body = req.body;
    let movie = {
        "title" : body.title,
        "genre" : body.genre,
        "grossing" : body.grossing,
        "year" : body.year
    }

    movies[movies.length] = movie;
    res.send(movies);
 });

 // UPDATE
 app.put('/movies/update', function(req, res){
    // title : Avatar
    // genre : Action

    var title = req.body.title;

    for (var i=0; i < movies.length; i++) {
        var movie = movies[i];
        if (movie.title === title) {
            movie.genre = req.body.genre;
            break;
        }
    }

    res.send(movies);
 });

 // UPDATE
 app.delete('/movies/delete', function(req, res) {
    // title : Jurassic World
    var title = req.body.title;

    for (var i=0; i < movies.length; i++) {
        var movie = movies[i];
        if (movie.title === title) {
            
            movies.splice(i,1);
            break;
        }
    }

    res.send(movies);
 });

 /**
  * Route to get all the latest reviews for a movie.
  * Hope you like what you see.
  */
 app.get('/movies/reviews', function(req, res) {

    var reviews = req.body.reviews;

    for (var i=o; i < reviews.length; i++) {
        var review = reviews[i];

        if (review.rating < 3) {
            console.log("Not a good movie");
        } else if (review.rating < 7) {
            console.log("Has potential");
        } else {
            console.log("Definetely check it out!!! :)");
        }

        res.send(reviews);

        // And that wraps it out!!!
    }
 });



// Start server
app.listen(8080);


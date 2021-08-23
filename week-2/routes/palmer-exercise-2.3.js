
// import required dependencies
let express = require('express');
let http = require('http');

// create app variable
let app = express();

// routes
app.get('/', function(req, res) {

    res.end('Welcome to the homepage.\n');

});

app.get('/about', function(req, res) {

    res.end('Welcome to the about page.\n');

});

app.get('/contact', function(req, res) {

    res.end('Welcome to the contact page');
});

// error message, going to a nonexistent route
app.use(function(req, res) {

    res.statusCode = 404;
    res.end('404!\n');
});

// start and liston on localhost 3000
http.createServer(app).listen(3000, function() {
    console.log("Application started on port %s", 3000);
})
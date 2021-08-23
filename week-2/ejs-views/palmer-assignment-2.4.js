
// import required dependencies
let express = require('express');
let http = require('http');
let path = require('path');

// create app variable
let app = express();

app.set('views', path.resolve(__dirname, 'views')); // Tells express that the views are in the views directory

app.set('view engine', 'ejs'); // Tells express to use the ejs engine

app.get('/', function(req, res) {
    res.render('index', {
        message: "Welcome to the homepage!"
    });
});

http.createServer(app).listen(8000, function() {
    console.log('EJS-Views app started on port 8000');
});



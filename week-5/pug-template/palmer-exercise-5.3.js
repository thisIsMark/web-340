// Require
let express = require('express');
let http = require('http');
let path = require('path');
let pug = require('pug');

// App Functions 
let app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

// Route
app.get('/', function(req, res) {
    res.render('index', {
        message: 'Strive not to be successful, but rather to be of value. - Albert Einstein'
    });
});

// Server 
http.createServer(app).listen(3000, function() {
    console.log("Application started and running on port 3000.");
});
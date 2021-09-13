// Require (express, http, path)
let express = require('express');
let http = require('http');
let path = require('path');

// App Functions
let app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// Local Composer Array
let composers = [
    "Bach",
    "Mozart",
    "Beethoven",
    "Verdi"
];

// Routes 
app.get('/', function(req, res) {
res.render('index', {
    names: composers
    });
});

// Create Server 
http.createServer(app).listen(3000, function() {
    console.log("Application started and running on port 3000.");
});
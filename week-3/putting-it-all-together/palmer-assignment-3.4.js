

// required dependencies 
let express = require('express');
let http = require('http');
let path = require('path');
let logger = require('morgan');

let app = express();

// set the ejs engine for views
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// routing for home page
app.use(logger('short'));

app.get('/', function(req, res) {
    res.render('index', {
        message: 'home page'
    });
});

// routing for about page
app.get('/about', function(req, res) {
    res.render('about', {
        message: 'about page'
    });
});

// routing for contact page
app.get('/contact', function(req, res) {
    res.render('contact', {
        message: 'contact page'
    });
});

// routing for products page
app.get('/products', function(req, res) {
    res.render('products', {
        message: 'products page'
    });
});

// create and start server on port 3000
http.createServer(app).listen(3000, function() {
    console.log('Application started and running on port %s', 3000);
});


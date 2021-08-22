// Modules and libraries imported
let express = require('express');
let http = require('http');

// Create app variable
let app = express();

// Function to provide any requests and respond with "Hello World" on a new line
app.use(function(req, res) {

    console.log('This is from a request to: %s', req.url);

    res.end('Hello World\n');
})

// Create and start server on port 8080 
http.createServer(app).listen(8080, function() {
    console.log('Application started on port %s', 8080);
});
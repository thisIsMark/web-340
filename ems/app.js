// Requirements
let express = require('express');
let http = require('http');
let path = require('path');
let logger = require('morgan');

// Create App variable
let app = express();

// Set view engine to views directory
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));

// Home Page Routing
app.get("/", function(req, res) {
    res.render("index", {
        title: "Welcome to the Employment Management System."
    });
});

// Create and run server on port 3000
http.createServer(app).listen(3000, function() {
    console.log("Application started and running on port 3000");
});


 let express = require('express');
 let http = require('http');
 let logger = require('morgan');

 let app = express();

 app.use(logger('dev'));

 app.get('/not-found', function(req, res) {
     res.status(404);

     res.json({
         error: "Resource not found."
     });
 });

 app.get('/ok', function(req, res) {
     res.status(200);

     res.json({
         error: "Page loaded correctly"
     });
 });

 app.get('/not-implemented', function(req, res) {
     res.status(501);

     res.json({
         error: "Page no implemented"
     });
 });

 http.createServer(app).listen(3000, function() {
     console.log('Application started and running on port 3000.');
 });
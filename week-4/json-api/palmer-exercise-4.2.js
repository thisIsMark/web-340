let express = require('express');
let http = require('http');
let app = express();
let logger = require('morgan');

app.use(logger('dev'));

app.get('/customer/:id', function(req,res) {
    let id = parseInt(req.params.id, 101);

    res.json({

        firstName: "Mark",
        lastName: "Palmer",
        employeeId: id 
    });
});

http.createServer(app).listen(3000, function() {
    console.log('Application started and running on port 3000');
}) 
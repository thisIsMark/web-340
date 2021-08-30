

let express = require('express');
let http = require('http');
let path = require('path');
let logger = require('morgan');

let app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.get('/:productId', function(req, res) {
    let productId = parseInt(req.params.productId, 10);

    res.render('index', {
        productId: productId
    });
});

http.createServer(app).listen(3000, function() {
    console.log('Application started and running on port %s', 3000);
});
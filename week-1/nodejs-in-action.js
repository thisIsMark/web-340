
// declare http 
let http = require("http");

// function with request and response
function processRequest(req, res) {

    // define body 
    let body = "Hello there, General Kenobi... You are a bold one...";
    let contentLength = body.length;
    res.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });
    res.end(body);
}

// declare server
let s = http.createServer(processRequest);
// start server on port 8080
s.listen(8080);
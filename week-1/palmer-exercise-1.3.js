let url = require('url');

let parsedURL = url.parse('https://www.example.com/profile?name=smith');

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);
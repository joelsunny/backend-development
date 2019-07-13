// import the builtin 'http' module
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

/*
Create an http server with a request listener function.
note: RequestListener => an event listener on 'request' event.

http.createServer(requestListener) returns http.Server object

This example uses the arrow function syntax introduced in ES6 to define
the RequestListener function inline.
    (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    }
*/
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
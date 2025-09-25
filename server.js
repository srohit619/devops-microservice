// server.js
const http = require('http');

const hostname = '0.0.0.0'; // Listen on all interfaces
const port = 3000; // Port number

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from the DevOps Microservice!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
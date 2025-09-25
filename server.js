// server.js
const http = require('http');

const hostname = '0.0.0.0'; // Listen on all interfaces
const port = 8000;

const server = http.createServer((req, res) => {
      // New Health Check Logic
  if (req.url === '/health') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ status: 'UP', service: 'microservice' }));
    return;
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from the DevOps Microservice!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
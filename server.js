const http = require('http');

let counter = 0;

const server = http.createServer((req, res) => {
  // Basic routing
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <h1>Simple Counter</h1>
      <p>Value: ${counter}</p>
      <a href="/increment">Increment</a><br>
      <a href="/decrement">Decrement</a><br>
      <a href="/reset">Reset</a>
    `);
  } 
  else if (req.url === '/increment') {
    counter++;
    res.writeHead(302, { Location: '/' });
    res.end();
  } 
  else if (req.url === '/decrement') {
    counter--;
    res.writeHead(302, { Location: '/' });
    res.end();
  } 
  else if (req.url === '/reset') {
    counter = 0;
    res.writeHead(302, { Location: '/' });
    res.end();
  } 
  else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

const http = require('node:http');
const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.writeHead(200);
    res.end('Home page');
  } else if (req.url == '/about') {
    for (let i = 0; i < 6000000000; i++) {}
    res.writeHead(200);
    res.end('About page');
  }
});
server.listen(8000, () => {
  console.log('server is running');
});

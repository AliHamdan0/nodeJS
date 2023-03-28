const { Worker } = require('node:worker_threads');
const http = require('node:http');

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.writeHead(200);
    res.end('Home page');
  } else if (req.url == '/about') {
    const worker = new Worker('./workerThred.js');
    worker.on('message', (j) => {
      res.writeHead(200);
      res.end(`About page ${j}`);
    });
  }
});
server.listen(7000, () => {
  console.log('server is running');
});

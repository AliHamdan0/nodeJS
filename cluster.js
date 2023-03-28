const cluster = require('node:cluster');
const http = require('node:http');
const os = require('node:os');
console.log('cpus', os.cpus().length);
if (cluster.isMaster) {
  console.log(`master process ${process.pid} is running`);
  cluster.fork();
  cluster.fork(); //creating a worker
} else {
  console.log(`Worker ${process.pid} is staterd`);
  const server = http.createServer((req, res) => {
    if (req.url == '/') {
      res.writeHead(200);
      res.end('Home page');
    } else if (req.url == '/about') {
      for (let i = 0; i < 60000000000; i++) {}
      res.writeHead(200);
      res.end('About page');
    }
  });
  server.listen(8000, () => {
    console.log('server is running');
  });
}

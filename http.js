const http = require('node:http');
const fs = require('node:fs/promises');
const server = http.createServer((req, res) => {
  const obj = { firstname: 'ali', lastname: 'Hamdan' };
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify(obj));
});

server.listen(3000, () => {
  console.log('server is running on port 3000'); //this function is optional
});

const serverTwo = http.createServer(async (req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  //   fs.createReadStream('./index.html').pipe(res);
  // let html = '<h1>Hello</h1>';
  let html = await fs.readFile('./index.html', 'utf-8'); //it has to be sync
  html = html.replace('{{name}}', 'ALi');
  res.end(html);
});

serverTwo.listen(4000, () => {
  console.log('server two is running on 4000');
});

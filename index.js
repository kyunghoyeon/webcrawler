var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World');
  console.log("Connection OK...");
}).listen(8888);

console.log("test");

var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  console.log("request received...");
  response.write("Hello, this is Vaibhav");
  response.end();
}).listen(8080);


var http = require('http');
var url = require('url');

function start(){
	function onrequest(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log("request for " + pathname + " received.");
		response.writeHead(200,
			{'Content-Type': 'text/plain'}
			);
		response.write('Hello World!!!');
		response.end();

	}

	http.createServer(onrequest).listen(8888);
	console.log('server has started');

}

exports.start = start;
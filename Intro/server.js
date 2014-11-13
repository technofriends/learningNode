var http = require('http');
var url = require('url');

function start(route){
	function onrequest(request,response){
		var pathname = url.parse(request.url).pathname;
		var query = url.parse(request.url).query;
		console.log("request for " + pathname + " received.");
		console.log("querystrings requested are : " + query);

		route(pathname);
		response.writeHead(200,
			{'Content-Type': 'text/plain'}
			);
		response.write('Hello World!!!');
		response.end();

	}

	http.createServer(onrequest).listen(8888);
	console.log('server has started and is listening on http://localhost:8888 ');

}

exports.start = start;
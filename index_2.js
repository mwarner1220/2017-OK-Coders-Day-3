var http = require('http');

var server = http.createServer(function(req,res){
	console.log(req.url);
	res.writeHead(200,{'Content-Type': 'text/plain'});
	res.end('Hello world');
});

console.log("Server running on localhost port 5000");
server.listen(5000,'127.0.0.1');

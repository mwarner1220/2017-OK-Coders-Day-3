var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){
	console.log(req.url);
	fs.readFile('text.txt',function(err,data){
		if (err) {	console.log("Something went very very wrong", err);
		res.writeHead(200,{'Content-Type': 'text/plain'});
	res.end("something went wrong" + err);
		} else {
			res.writeHead(200,{'Content-Type': 'text/html'});
			res.end(data.toString());
		}
	});
	
});

console.log("Server running on localhost port 5000");
server.listen(5000,'127.0.0.1');
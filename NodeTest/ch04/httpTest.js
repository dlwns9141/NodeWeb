var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res)
{
	var instream = fs.createReadStream('NodeTest/ch04/output.txt');
	instream.pipe(res);
});

server.listen(7001, '127.0.0.1');

var http = require('http');
var express = require('express');

process.on('uncaughtException', function(err) {
 console.log(err);
});

var server = express();

server.use(express.static(__dirname));

var port = 3000;
server.listen(process.env.PORT || port, function(){
  console.log('NodeJs application is running on http://localhost:'+port);
});

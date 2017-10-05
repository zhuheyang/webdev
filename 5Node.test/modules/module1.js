// var m2 = require('./module2');
// console.log(m2);
var http = require('http');
var server = http.createServer(function(request,response){
	console.log('got a request');
	//this will now happen in the chrome console 
	//but at your C
	response.write('hi');
	response.end();
});
server.listen(3000);
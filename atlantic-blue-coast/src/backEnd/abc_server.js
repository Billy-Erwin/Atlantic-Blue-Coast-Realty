const http = require('http');
const routeAPI = require('./abc_router.js');

const server = http.createServer(function(req, resp){
	return routeAPI.routeRequest(req, resp);
});

server.listen(4040);
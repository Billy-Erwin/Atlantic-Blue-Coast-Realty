const url = require('url');
const featuredListings = require('./spark_api/reqModuleTest.js')

//@param req = HTTP request object
//@param resp = HTTP response object
exports.routeRequest = function(req, resp){

	let urlObj = url.parse(req.url, true);
	let resourcePath = urlObj.pathname.toString();

	const stuff = featuredListings.getStuff(resp);
	// console.log('stuff : ', stuff);


	// if(resourcePath === '/howl/becomeASponsor') {
	// 	emailEndpoint.sendIt(JSON.parse(urlObj.query.model));
	// 	resp.writeHead(200, {'Content-Type': 'application/json'});
	// 	resp.end(JSON.stringify(urlObj.query));
	// }
}
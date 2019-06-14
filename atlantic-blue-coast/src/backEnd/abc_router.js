const url = require('url');
// const featuredListings = require('./spark_api/reqModuleTest.js')
const featuredListings = require('./spark_api/getFeaturedListings')

//@param req = HTTP request object
//@param resp = HTTP response object
exports.routeRequest = function(req, resp){

	let urlObj = url.parse(req.url, true);
	let resourcePath = urlObj.pathname.toString();

	if(resourcePath === '/getFeaturedListings') {
		featuredListings.getFeaturedListings(resp);
	}
}
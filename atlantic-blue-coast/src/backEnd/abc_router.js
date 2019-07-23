const url = require('url');
// const featuredListings = require('./spark_api/reqModuleTest.js')
const featuredListings = require('./spark_api/getFeaturedListings');
const selectedListing = require('./spark_api/getSelectedListing');
const standardFieldMetadata = require('./spark_api/getStandardFieldMetaData');

//@param req = HTTP request object
//@param resp = HTTP response object
exports.routeRequest = function(req, resp){
	console.log('routing...');
	let urlObj = url.parse(req.url, true);
	let resourcePath = urlObj.pathname.toString();

	if(resourcePath === '/getFeaturedListings') {
		featuredListings.getFeaturedListings(resp);
	} else if(resourcePath === '/getSelectedListing') {
		selectedListing.getSelectedListing(resp, urlObj.query.id);
	} else if(resourcePath === '/getStandardFieldMetadata') {
		console.log('resourcePath : ', resourcePath);
		console.log(urlObj);
		standardFieldMetadata.getStandardFieldMetadata(resp);
	}
}
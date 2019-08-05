const url = require('url');
// const featuredListings = require('./spark_api/reqModuleTest.js')
const featuredListings = require('./spark_api/getFeaturedListings');
const selectedListing = require('./spark_api/getSelectedListing');
const standardFieldMetadata = require('./spark_api/getStandardFieldMetaData');
const filteredListings = require('./spark_api/getFilteredListings');

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
		standardFieldMetadata.getStandardFieldMetadata(resp);
	} else if(resourcePath === '/getFilteredListings') {
		filteredListings.getFilteredListings(resp, urlObj.query);
	} else if(resourcePath === '/getSimpleFilteredListings') {
		filteredListings.getSimpleFilteredListings(resp, urlObj.query.searchText);
	}
}
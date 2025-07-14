const url = require('url');
const featuredListings = require('./spark_api/getFeaturedListings');
const selectedListing = require('./spark_api/getSelectedListing');
const standardFieldMetadata = require('./spark_api/getStandardFieldMetaData');
const filteredListings = require('./spark_api/getFilteredListings');
const abcMail = require('./abc_mail');
const photoService = require('./abc_photo_service');

//@param req = HTTP request object
//@param resp = HTTP response object
exports.routeRequest = function(req, resp){
	// console.log('its routing...');
	let urlObj = url.parse(req.url, true);
	let resourcePath = urlObj.pathname.toString();
	// console.log('resourcePath : ', resourcePath);

	if(resourcePath === '/health') {
		resp.writeHead(200, { 'Content-Type': 'application/json' });
		resp.end(JSON.stringify({ status: 'ok' }));
	} else if(resourcePath === '/getFeaturedListings') {
		featuredListings.getFeaturedListings(resp);
	} else if(resourcePath === '/getSelectedListing') {
		selectedListing.getSelectedListing(resp, urlObj.query.id);
	} else if(resourcePath === '/getStandardFieldMetadata') {
		standardFieldMetadata.getStandardFieldMetadata(resp);
	} else if(resourcePath === '/getFilteredListings') {
		filteredListings.getFilteredListings(resp, urlObj.query);
	} else if(resourcePath === '/getSimpleFilteredListings') {
		filteredListings.getSimpleFilteredListings(resp, urlObj.query.searchText);
	} else if(resourcePath === '/getAbcListings'){
		featuredListings.getAbcListings(resp, urlObj.query);
	} else if(resourcePath === '/sendMail'){
		abcMail.sendIt(resp, urlObj.query);
	} else if (resourcePath === '/photoService') {
		photoService.getPhotosFromDirectory(resp, urlObj.query);
	}
}

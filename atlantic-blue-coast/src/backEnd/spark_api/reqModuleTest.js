let request = require('request');

let specificListing = '/v1/listings/20080303201245019178000000';
let idxDefault = '/v1/idxlinks/default';
let listingPhotos = '/v1/listings/20080303201245019178000000/photos';
let listingSelect = encodeURI('_select=ListOfficeId');
let listingFilter = encodeURI('_filter=BathsFull Eq 3 And BedsTotal Eq 4');
let token = '';
	// uri: 'sparkapi.com',
	// path: listingPhotos,
let options = {
	url: `https://sparkapi.com/v1/listings?_expand=PrimaryPhoto&${listingFilter}&_limit=4`,
	method: 'GET',
	headers: {
		'X-SparkApi-User-Agent': 'SparkAPIExamples',
		'Authorization': `Bearer ${token}`,
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	},
	_select: 'CoListAgentEmail'
};

var incomingResponse;

function callback(error, response, body) {
	if (!error && response.statusCode == 200) {
		// console.log('body : ', body);
		let info = JSON.parse(body);
		console.log(info.D.Results[0]);
		console.log(info.D.Results[1]);
		console.log(info.D.Results[2]);
		console.log(info.D.Results[3]);
		// console.log(info.D.Results[0].StandardFields.ListPrice);
		// console.log(info.D.Results[0].StandardFields.StreetNumber);
		// console.log(info.D.Results[0].StandardFields.StreetDirSuffix);
		// console.log(info.D.Results[0].StandardFields.StreetName);
		// console.log(info.D.Results[0].StandardFields.StreetSuffix);
		// console.log(info.D.Results[0].StandardFields.City);
		// console.log(info.D.Results[0].StandardFields.StateOrProvince);
		// console.log(info.D.Results[0].StandardFields.Photos);
		// return ;
		incomingResponse.writeHead(200, {'Content-Type': 'application/json'});
		incomingResponse.end(JSON.stringify(info.D.Results));
	} else {
		console.log('error : ', error);
		console.log('response.statusCode : ', response.statusCode)
	}
}


module.exports.getStuff = function(resp){
	incomingResponse = resp;
	request(options, callback);
}
	// request(options, callback);

let request = require('request');
let tukus = require('../../assets/files/tukus');

let token = tukus['tukus'];

let options = {
	method: 'GET',
	headers: {
		'X-SparkApi-User-Agent': 'SparkAPIExamples',
		'Authorization': `Bearer ${token}`,
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
};

var incomingResponse;

function callback(error, response, body) {
	if (!error && response.statusCode == 200) {
		let info = JSON.parse(body);
		// console.log('info : ', info.D.Results);
		incomingResponse.writeHead(200, {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': 'X-Requested-With'
		});
		incomingResponse.end(JSON.stringify(info.D.Results));
	} else {
		console.log('error : ', error);
		console.log('response.statusCode : ', response.statusCode)
	}
}
function testCallback(error, response, body) {
	// console.log('error : ', error);
	// console.log('response : ', response);
	// console.log('body : ', body);
	if (!error && response.statusCode == 200) {
		let info = JSON.parse(body);
		console.log('info : ', info.D.Results);

	} else {
		console.log('error : ', error);
		console.log('response.statusCode : ', response.statusCode)
	}
}

module.exports.getSelectedListing = function(resp, id){
	options.url = `https://sparkapi.com/v1/listings/${id}?_expand=Photos,CustomFieldsExpanded`;
	incomingResponse = resp;
	request(options, callback);
}
function getSelectedListingTest(){
	let id = '20070816154711041927000000';
	let mlsId = '20090403000000000001000000';
	options.url = `https://sparkapi.com/v1/listings/${id}?_expand=Photos,CustomFieldsExpanded`;
	options.url = `https://sparkapi.com/v1/standardfields`;
	options.url = `https://sparkapi.com/v1/mls/${mlsId}/standardfields`;
	request(options, testCallback);
}

// getSelectedListingTest();
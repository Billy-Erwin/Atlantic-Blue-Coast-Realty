let request = require('request');


let token = '';
let agentId = '20110315124649945876000000';

let listingFilter = encodeURI(`_filter=ListAgentId Eq '${agentId}'`);

let options = {
	url: `https://sparkapi.com/v1/listings?_expand=PrimaryPhoto&${listingFilter}&_limit=6`,
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

module.exports.getFeaturedListings = function(resp){
	incomingResponse = resp;
	request(options, callback);
}
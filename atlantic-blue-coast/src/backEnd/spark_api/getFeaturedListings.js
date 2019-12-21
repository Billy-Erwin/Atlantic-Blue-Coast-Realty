let request = require('request');
let tukus = require('../../assets/files/tukus');

let token = tukus['tukus'];
let agentId = '20151215165859922194000000';

let listingFilter = encodeURI(`_filter=ListAgentId Eq '${agentId}'`);

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
		let returnObj = {
			listings: info.D.Results,
			pagination: info.D.Pagination
		};
		incomingResponse.writeHead(200, {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': 'X-Requested-With'
		});
		incomingResponse.end(JSON.stringify(returnObj));
	} else {
		console.log('error : ', error);
		console.log('response.statusCode : ', response.statusCode)
	}
}

module.exports.getFeaturedListings = function(resp){
	options.url = `https://sparkapi.com/v1/listings?_expand=PrimaryPhoto&${listingFilter}&_limit=6`;
	incomingResponse = resp;
	request(options, callback);
}

module.exports.getAbcListings = function(resp, query){
	let page = query['page'];
	let orderby = query['orderby'];
	options.url = `https://sparkapi.com/v1/listings?_expand=PrimaryPhoto&${listingFilter}&_limit=20&_pagination=1&_page=${page}&_orderby=${orderby}`;
	incomingResponse = resp;
	request(options, callback);
}
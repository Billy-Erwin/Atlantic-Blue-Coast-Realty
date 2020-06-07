let request = require('request');
let tukus = require('../../assets/files/tukus');
let featuredListingsData = require('../../assets/files/featuredListings');

let token = tukus['tukus'];
let featuredListings = featuredListingsData['featuredListings'];
let agentId = '20151215165859922194000000';

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

module.exports.getFeaturedListings = function(resp) {
  let listingFilter = `_filter=ListAgentId Eq '${agentId}' And MlsStatus Ne 'Closed'`//And (`;
  // Use for configureable featured listings in the future
  // for(let i = 0; i < featuredListings.length; i++) {
  //   if (i !== 0) {
  //     listingFilter += ' Or ';
  //   }
  //   listingFilter += `ListingKey Eq '${featuredListings[i]}'`;
  //   if (i === featuredListings.length -1) {
  //     listingFilter += ')';
  //   }
  // }

	options.url = `https://sparkapi.com/v1/listings?_expand=PrimaryPhoto&${encodeURI(listingFilter)}&_limit=6`;
	incomingResponse = resp;
	request(options, callback);
}

module.exports.getAbcListings = function(resp, query){
	let page = 1;
	let orderBy = '-ListPrice';
	if (query && query['page']) {
		page = query['page'];
	}
	if (query['orderBy']) {
		orderBy = query['orderBy'];
	}
  let listingFilter = `_filter=ListAgentId Eq '${agentId}' And MlsStatus Ne 'Closed'`;
	options.url = `https://sparkapi.com/v1/listings?_expand=PrimaryPhoto&${encodeURI(listingFilter)}&_limit=20&_pagination=1&_page=${page}&_orderby=${orderBy}`;
	incomingResponse = resp;
	request(options, callback);
}

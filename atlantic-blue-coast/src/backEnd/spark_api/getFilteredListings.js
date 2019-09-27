let request = require('request');
let state_hash = require('../../assets/files/states_hash');

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

function testCallback(error, response, body) {
	if (!error && response.statusCode == 200) {
		let info = JSON.parse(body);
		console.log(info.D);
		// console.log(info.D.Results);
	} else {
		console.log('error : ', error);
		console.log('response.statusCode : ', response.statusCode)
	}
}

function buildLocationSegment(locationSearchText){
	let filterSegment = '';
	if(locationSearchText){
		let city = locationSearchText;
		let postalCode = 0;
		let stateAbbreviation = usaStates(locationSearchText);
		filterSegment += `City Eq contains('${city}') Or `;
		filterSegment += `StateOrProvince Eq contains('${stateAbbreviation}') Or `;
		if(!isNaN(locationSearchText)){
			postalCode = locationSearchText;
		}
		filterSegment += `tolower(PostalCode) Eq tolower('${postalCode}')`;
	}
	return filterSegment;
}

function usaStates(stateString){
	stateString = (stateString + "").toLowerCase();
	for(let key in state_hash){
		if(state_hash.hasOwnProperty(key) &&
			(stateString == (key + "").toLowerCase() || stateString == state_hash[key].toLowerCase())){
			return state_hash[key];
		}
	}
	return "";
}

module.exports.getFilteredListings = function(resp, filterFieldsMap){
	let filterSegment = '';
	if(filterFieldsMap.searchText && filterFieldsMap.searchText != 'undefined'){
		filterSegment = `(${buildLocationSegment(filterFieldsMap.searchText)})`;
	}
	if(filterFieldsMap.filterString){
		if(filterFieldsMap.searchText && filterFieldsMap.searchText != 'undefined'){
			filterSegment += `And ${filterFieldsMap.filterString}`;
		} else {
			filterSegment = filterFieldsMap.filterString.trim();
		}
	}

	options.url = `https://sparkapi.com/v1/listings?_expand=PrimaryPhoto&_limit=20&_pagination=1&_page=${filterFieldsMap.page}&_filter=${encodeURI(filterSegment)}`;
	incomingResponse = resp;
	request(options, callback);
}

module.exports.getSimpleFilteredListings = function(resp, locationText){
	options.url =
		`https://sparkapi.com/v1/listings?_expand=PrimaryPhoto&_filter=${encodeURI(buildLocationSegment(locationText))}`;
	incomingResponse = resp;
	request(options, callback);
}

function getSimpleFilteredListingsTest(){
	let filterSegment = 'BathsHalf Eq 2';
	options.url =
		`https://sparkapi.com/v1/listings?_expand=PrimaryPhoto&_limit=16&_pagination=1&_filter=${filterSegment}`;
	request(options, testCallback);
}
// getSimpleFilteredListingsTest();
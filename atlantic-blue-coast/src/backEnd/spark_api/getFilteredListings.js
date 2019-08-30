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
		// console.log(info.length);
		// console.log(info);
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

function buildFilterSegment(filterFieldsMap){
	let filterSegment = '_filter=';
	let fields = Object.keys(filterFieldsMap);
	for(let field of fields){
		let theValue = filterFieldsMap[field];
		if (isNaN(theValue) || field === 'ListAgentId'){
			filterSegment += `${field} Eq '${theValue}' And `;
		} else {
			filterSegment += `${field} Eq ${theValue} And `;
		}
	}
	filterSegment = encodeURI(filterSegment.substring(0, filterSegment.length - 5));
	options.url = `https://sparkapi.com/v1/listings?_expand=PrimaryPhoto&${filterSegment}`;
}

function buildLocationSegment(locationSearchText){
	let filterSegment = '';
	if(locationSearchText){
		console.log('yay');
		let city = locationSearchText;
		let postalCode = 0;
		let stateAbbreviation = usaStates(locationSearchText);
		filterSegment += `tolower(City) Eq tolower('${city}') Or `;
		filterSegment += `tolower(StateOrProvince) Eq tolower('${stateAbbreviation}') Or `;
		if(!isNaN(locationSearchText)){
			postalCode = locationSearchText;
		}
		filterSegment += `tolower(PostalCode) Eq tolower('${postalCode}')`;

		console.log('filterSegment : ' + filterSegment);
	} else {
		console.log('booo');
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
	console.log('filterString : ', filterFieldsMap.filterString);
	console.log('locationSearchText : ', filterFieldsMap.searchText);
	console.log('page : ', filterFieldsMap.page);
	let filterSegment = '';
	if(filterFieldsMap.searchText && filterFieldsMap.searchText != 'undefined'){
		console.log('wtf : ', filterFieldsMap.searchText);
		filterSegment = `(${buildLocationSegment(filterFieldsMap.searchText)})`;
	}
	if(filterFieldsMap.filterString){
		if(filterFieldsMap.searchText && filterFieldsMap.searchText != 'undefined'){
			filterSegment += `And ${filterFieldsMap.filterString}`;
		} else {
			filterSegment = filterFieldsMap.filterString.trim();
		}
	}
	// console.log('filterSegment : ', filterSegment);
	options.url = `https://sparkapi.com/v1/listings?_expand=PrimaryPhoto&_limit=16&_pagination=1&_page=${filterFieldsMap.page}&_filter=${encodeURI(filterSegment)}`;
	incomingResponse = resp;
	request(options, callback);
}

module.exports.getSimpleFilteredListings = function(resp, locationText){
	// buildLocationSegment(locationText);
	options.url =
		`https://sparkapi.com/v1/listings?_expand=PrimaryPhoto&_filter=${encodeURI(buildLocationSegment(locationText))}`;
	incomingResponse = resp;
	request(options, callback);
}

function getSimpleFilteredListingsTest(){
	// buildLocationSegment(locationText);
	let filterSegment = 'BathsHalf Eq 2';
	options.url =
		`https://sparkapi.com/v1/listings?_expand=PrimaryPhoto&_limit=16&_pagination=1&_filter=${filterSegment}`;
	request(options, testCallback);
}
getSimpleFilteredListingsTest();
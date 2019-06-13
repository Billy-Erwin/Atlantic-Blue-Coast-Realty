const https = require('https')

const data = JSON.stringify({
	'_select': 'BathsFull,ListPrice'
});

let token = 'alecxrelpen098otxjtg31p2r';

let specificListing = '/v1/listings/20080303201245019178000000';
let idxDefault = '/v1/idxlinks/default';
let listingPhotos = '/v1/listings/20080303201245019178000000/photos';
let listingSelect = encodeURI('_select=ListOfficeId');
let listingFilter = encodeURI('_filter=BathsFull Eq 3 And BedsTotal Eq 4');

const options = {
	hostname: 'sparkapi.com',
	port: 443,
	path: '/v1/listings?_select=BedsTotal,BathsFull&_limit=1&' + listingFilter,
	method: 'GET',
	headers: {
		'X-SparkApi-User-Agent': 'SparkAPIExamples',
		'Authorization': 'Bearer ' + token,
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
}

const req = https.request(options, (res) => {
	console.log(`statusCode: ${res.statusCode}`)

	res.on('data', (d) => {
		process.stdout.write(d)
	})
})

req.on('error', (error) => {
	console.error(error)
})

req.write(data)
req.end()
let nodeMailer = require('nodemailer');
let tukus = require('../assets/files/tukus');


let transporter = nodeMailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'williamcerwin@gmail.com',
		pass: tukus['mailPassword']
	}
});

let mailOptions = {
	from: 'williamcerwin@gmail.com',
	to: 'billy.c.erwin@gmail.com'
};

function mailCarrier(incomingResponse){
	transporter.sendMail(mailOptions, function(error){
		if (error) {
			let returnData = {
				status: 'error',
				error: error
			};
			incomingResponse.end(JSON.stringify(returnData));
		} else {
			incomingResponse.writeHead(200, {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'X-Requested-With'
			});
			incomingResponse.end(JSON.stringify({status: 'success'}));
		}
	});
}

exports.sendIt = function(response, queryObj){
	let model = JSON.parse(queryObj.model);
	mailOptions.from = model.emailAddress;
	mailOptions.text = model.fullName + '\n';
	mailOptions.text += model.emailAddress + '\n';
	mailOptions.text += model.phoneNumber + '\n';
	mailOptions.text += model.message + '\n';

	mailCarrier(response);
}
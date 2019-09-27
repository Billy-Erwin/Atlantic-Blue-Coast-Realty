var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'williamcerwin@gmail.com',
		pass: ''
	}
});

var mailOptions = {
	from: 'williamcerwin@gmail.com',
	to: 'billy.c.erwin@gmail.com'
};

exports.sendIt = function(model){
	mailOptions.from = model.emailAddress;
	mailOptions.subject = model.businessName;
	mailOptions.text = model.firstName + ' ' + model.lastName + '\n';
	mailOptions.text += model.businessName + '\n';
	mailOptions.text += model.emailAddress + '\n';
	mailOptions.text += model.phoneNumber + '\n';
	mailOptions.text += model.comments + '\n';
	console.log('model', model);
	// transporter.sendMail(mailOptions, function(error, info){
	// 	if (error) {
	// 		console.log(error);
	// 	} else {
	// 		console.log('Email sent: ' + info.response);
	// 	}
	// });
}

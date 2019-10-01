import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'abc-contact-info',
	templateUrl: './abc-contact-info.component.html',
	styleUrls: ['./abc-contact-info.component.css']
})

export class AbcContactInfoComponent implements OnInit {
	contactInfo = {
		name: 'Atlantic Blue Coast Realty LLC',
		description: 'Real Estate... easy as A B C',
		phoneNumber: 'Phone: (910) 625-8199',
		email: 'Email: AtlanticBlueCoast@gmail.com',
		address: 'Address: PO Box 975, Whiteville NC 28472',
		socialMediaLinks : [
			{class: 'fa fa-facebook', href: 'http://facebook.com/AtlanticBlueCoast'},
			{class: 'fa fa-twitter', href: 'http://twitter.com/ABlueCoastReal'},
			{class: 'fa fa-instagram', href: 'http://instagram.com/AtlanticBlueCoast'}
		]
	};

	ericContactInfo = {
		name: 'Eric Hill',
		description: 'Owner / Broker In Charge',
		phoneNumber: 'Phone: (910) 625-8199',
		email: 'Email: erichillreal@hotmail.com',
		socialMediaLinks: [
			{class: 'fa fa-facebook', href: 'http://facebook.com/erichillreal'},
			{class: 'fa fa-twitter', href: 'http://twitter.com/erichillreal'},
			{class: 'fa fa-instagram', href: 'http://instagram.com/erichillreal'}
		]
	};

	constructor() { }

	ngOnInit() {
	}

}

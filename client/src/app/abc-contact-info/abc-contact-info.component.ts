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
		phoneNumber: '(910) 625-8199',
		email: 'AtlanticBlueCoast@gmail.com',
		address: 'PO Box 975, Whiteville NC 28472',
		socialMediaLinks : [
			{class: 'fa fa-facebook', href: 'http://facebook.com/AtlanticBlueCoast', displayLink: '@AtlanticBlueCoast'},
			{class: 'fa fa-twitter', href: 'http://twitter.com/ABlueCoastReal', displayLink: '@ABlueCoastReal'},
			{class: 'fa fa-instagram', href: 'http://instagram.com/AtlanticBlueCoast', displayLink: '@AtlanticBlueCoast'}
		]
	};

	ericContactInfo = {
		name: 'Eric D Hill',
		description: 'Owner / Broker In Charge',
		phoneNumber: '(910) 625-8199',
		email: 'erichillreal@hotmail.com',
		socialMediaLinks: [
			{class: 'fa fa-facebook', href: 'http://facebook.com/erichillreal', displayLink: '@erichillreal'},
			{class: 'fa fa-twitter', href: 'http://twitter.com/erichillreal', displayLink: '@erichillreal'},
			{class: 'fa fa-instagram', href: 'http://instagram.com/erichillreal', displayLink: '@erichillreal'}
		]
	};

	constructor() { }

	ngOnInit() {
	}

}

import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'abc-text-area',
	templateUrl: './abc-text-area.component.html',
	styleUrls: ['./abc-text-area.component.css']
})
export class AbcTextAreaComponent implements OnInit {
	underConstruction = {
		line1: 'Our site is currently under construction.',
		line2: 'In the meantime, check out our social media pages.'
	};

	contactInfo = {
		name: 'Atlantic Blue Coast Realty',
		street: 'PO Box 975',
		cityStateZip: 'Whiteville NC, 28472',
		email: 'AtlanticBlueCoast@gmail.com',
		callOrText: 'Call or Text: (910) 625-8199'
	};

	socialMediaLinks = [
		{href: 'http://facebook.com/atlanticbluecoast', displayText:'Facebook.com/AtlanticBlueCoast'},
		{href: 'http://twitter.com/abluecoastreal', displayText:'Twitter.com/ABlueCoastReal'},
		{href: 'http://instagram.com/atlanticbluecoast', displayText:'Instagram.com/AtlanticBlueCoast'}
	];

	constructor() { }

	ngOnInit() {
	}

}

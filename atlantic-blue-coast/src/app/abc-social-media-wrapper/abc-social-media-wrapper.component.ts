import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'abc-social-media-wrapper',
	templateUrl: './abc-social-media-wrapper.component.html',
	styleUrls: ['./abc-social-media-wrapper.component.css']
})
export class AbcSocialMediaWrapperComponent implements OnInit {
	socialMediaLinks = [];
	ericSocialMediaLinks = [];

	constructor() { }

	ngOnInit() {
		this.socialMediaLinks = [
			{class: 'contactUs', href: '#', displayText: 'Atlantic Blue Coast'},
			{class: 'fa fa-facebook', href: 'http://facebook.com/AtlanticBlueCoast'},
			{class: 'fa fa-twitter', href: 'http://twitter.com/ABlueCoastReal'},
			{class: 'fa fa-instagram', href: 'http://instagram.com/AtlanticBlueCoast'},
		];
		this.ericSocialMediaLinks = [
			{class: 'contactUs', href: '#', displayText: 'Eric D Hill'},
			{class: 'fa fa-facebook', href: 'http://facebook.com/erichillreal'},
			{class: 'fa fa-twitter', href: 'http://twitter.com/erichillreal'},
			{class: 'fa fa-instagram', href: 'http://instagram.com/erichillreal'},
		];
	}
}

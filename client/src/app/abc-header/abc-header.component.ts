import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'abc-header',
	templateUrl: './abc-header.component.html',
	styleUrls: ['./abc-header.component.css']
})
export class AbcHeaderComponent implements OnInit {
	welcomeMessage = 'Welcome to Atlantic Blue Coast Realty!';
	contactNameAndTitle = 'Eric D Hill - Owner / Broker In Charge';
	phoneNumber = '(910) 625-8199';
	constructor() { }

	ngOnInit() {
	}

}
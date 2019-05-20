import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'abc-listing-card-deck',
	templateUrl: './abc-listing-card-deck.component.html',
	styleUrls: ['./abc-listing-card-deck.component.css']
})
export class AbcListingCardDeckComponent implements OnInit {

	@Input() listings;
	constructor() { }

	ngOnInit() {
	}

}

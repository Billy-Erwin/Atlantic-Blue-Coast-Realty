import {Component, Input} from '@angular/core';

@Component({
	selector: 'abc-listing-card-deck',
	templateUrl: './abc-listing-card-deck.component.html',
	styleUrls: ['./abc-listing-card-deck.component.css']
})
export class AbcListingCardDeckComponent {
	@Input() listings;
	title: string = 'Atlantic Blue Coast Featured Listings';

	constructor() { }
}

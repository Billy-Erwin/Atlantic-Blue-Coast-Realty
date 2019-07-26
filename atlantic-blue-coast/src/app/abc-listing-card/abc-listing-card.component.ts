import {Component, Input} from '@angular/core';

@Component({
	selector: 'abc-listing-card',
	templateUrl: './abc-listing-card.component.html',
	styleUrls: ['./abc-listing-card.component.css']
})
export class AbcListingCardComponent {
	@Input() listing;
	constructor() { }
}

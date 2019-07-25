import { Component } from '@angular/core';
import { ListingsService } from "../listings.service";

@Component({
	selector: 'abc-featured-listings',
	templateUrl: './abc-featured-listings.component.html',
	styleUrls: ['./abc-featured-listings.component.css']
})
export class AbcFeaturedListingsComponent {
	constructor(private listingsService: ListingsService) { }
}

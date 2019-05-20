import { Component, OnInit } from '@angular/core';
import {Listing} from "../Listing";
import {ListingsService} from "../listings.service";

@Component({
	selector: 'abc-featured-listings',
	templateUrl: './abc-featured-listings.component.html',
	styleUrls: ['./abc-featured-listings.component.css']
})
export class AbcFeaturedListingsComponent implements OnInit {
//Need a service to get the listings and pass into card-deck component
	listings: Listing[];
	constructor(private listingsService: ListingsService) { }

	ngOnInit() {
		this.getListings();
	}

	getListings(): void {
		this.listingsService.getListings()
			.subscribe(listings => this.listings = listings);
	}

}

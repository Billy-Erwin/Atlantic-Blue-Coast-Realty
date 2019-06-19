import { Component, OnInit } from '@angular/core';
import {Listing} from "../Listing";
import {ListingsService} from "../listings.service";

@Component({
	selector: 'abc-featured-listings',
	templateUrl: './abc-featured-listings.component.html',
	styleUrls: ['./abc-featured-listings.component.css']
})
export class AbcFeaturedListingsComponent implements OnInit {

	listings: Listing[] = [];
	constructor(private listingsService: ListingsService) { }

	ngOnInit() {
		this.getListings();
	}

	getListings(): void {
		this.listingsService.getFeaturedListings(this.listings);
	}

}

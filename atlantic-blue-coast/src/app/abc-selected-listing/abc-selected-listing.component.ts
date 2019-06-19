import {Component, OnInit} from '@angular/core';
import {ListingsService} from "../listings.service";
import { ActivatedRoute } from '@angular/router';
import {Listing} from "../Listing";

@Component({
	selector: 'abc-selected-listing',
	templateUrl: './abc-selected-listing.component.html',
	styleUrls: ['./abc-selected-listing.component.css']
})
export class AbcSelectedListingComponent implements OnInit {
	selectedListing;
	constructor(
		private route: ActivatedRoute,
		private listingsService: ListingsService) { }

	ngOnInit() {
		this.getSelectedListing();
	}

	getSelectedListing(): void {
		let id = this.route.snapshot.paramMap.get('id');
		this.selectedListing = {};
		console.log('theId : ', id);
		this.listingsService.getSelectedListing(this.selectedListing, id);
		console.log(this.selectedListing);
	}

}

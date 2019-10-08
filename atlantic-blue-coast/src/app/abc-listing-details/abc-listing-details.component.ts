import { Component, Input, OnInit } from '@angular/core';
import { Listing } from "../Listing";

@Component({
	selector: 'abc-listing-details',
	templateUrl: './abc-listing-details.component.html',
	styleUrls: ['./abc-listing-details.component.css']
})

export class AbcListingDetailsComponent implements OnInit {

	@Input() selectedListing: Listing;
	keys: any[];

	constructor() { }

	ngOnInit() {
		this.keys = [];
		if(this.selectedListing.detailSections){
			this.selectedListing.detailSections.forEach((value, key) => {
				this.keys.push(key);
			});
		}
	}
}

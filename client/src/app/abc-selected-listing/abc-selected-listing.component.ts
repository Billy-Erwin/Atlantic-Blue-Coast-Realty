import { Component, OnInit } from '@angular/core';
import { ListingsService } from "../listings.service";
import { Router, ActivatedRoute } from '@angular/router';
import { Listing } from "../Listing";
import { StandardFieldService } from "../standard-field.service";

@Component({
	selector: 'abc-selected-listing',
	templateUrl: './abc-selected-listing.component.html',
	styleUrls: ['./abc-selected-listing.component.css']
})

export class AbcSelectedListingComponent implements OnInit {

	selectedListing: Listing;
	queryData;
	returnToSearch: boolean = false;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private listingsService: ListingsService,
		private standardFieldService: StandardFieldService) { }

	ngOnInit() {
		this.getSelectedListing();
	}

	getSelectedListing(): void {
		this.queryData = this.route.snapshot.paramMap.get('queryData');
		let id = JSON.parse(this.queryData)['id'];
		this.returnToSearch = (JSON.parse(this.queryData)['advancedSearchOptions']);
		this.listingsService.getSelectedListing(id).subscribe(data => {
			this.selectedListing = data;
		});
	}

	backToSearch() {
		this.router.navigate(['search', this.queryData]);
	}
}
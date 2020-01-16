import { Component, Input, OnInit } from '@angular/core';
import { ListingsService } from "../listings.service";

@Component({
	selector: 'abc-listing-card',
	templateUrl: './abc-listing-card.component.html',
	styleUrls: ['./abc-listing-card.component.css']
})

export class AbcListingCardComponent implements OnInit {

	@Input() listing;

 	queryData = {};

	constructor(public listingsService: ListingsService) { }

	ngOnInit() {
		this.queryData['id'] = this.listing.id;
		if (this.listingsService.advancedSearchOptions) {
			this.queryData['advancedSearchOptions'] = this.listingsService.advancedSearchOptions;
		}
		if (this.listingsService.paginationObject['CurrentPage']) {
			this.queryData['currentPage'] = this.listingsService.paginationObject['CurrentPage'];
			this.queryData['pageNumbers'] = this.listingsService.pageNumbers;
			this.queryData['sortIndex'] = this.listingsService.sortIndex;
			this.queryData['sortKey'] = this.listingsService.sortKey;
		}
		this.queryData = JSON.stringify(this.queryData);
	}

}

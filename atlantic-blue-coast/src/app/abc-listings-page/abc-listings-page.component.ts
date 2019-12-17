import { Component, OnInit } from '@angular/core';
import { ListingsService } from "../listings.service";

@Component({
	selector: 'abc-listings-page',
	templateUrl: './abc-listings-page.component.html',
	styleUrls: ['./abc-listings-page.component.css']
})

export class AbcListingsPageComponent implements OnInit {

	title: string = 'Atlantic Blue Coast Realty Listings';

	constructor(private listingsService: ListingsService) { }

	ngOnInit() {
		this.listingsService.setAbcListings(1).subscribe(data => {
			this.listingsService.paginationObject = data;
			this.listingsService.activeComponent = 'abcListings';
		});
	}
	ngOnDestroy(){
		this.listingsService.filteredListings = [];
		this.listingsService.pageNumbers = [1,2,3,4,5];
		this.listingsService.paginationObject = {};
		this.listingsService.activeComponent = '';
		this.listingsService.searchText = '';
		this.listingsService.filterString = '';
		this.listingsService.sortKey =  '';
	}
}

import { Component, OnInit } from '@angular/core';
import { ListingsService } from "../listings.service";

@Component({
	selector: 'abc-sort-listings',
	templateUrl: './abc-sort-listings.component.html',
	styleUrls: ['./abc-sort-listings.component.css']
})
export class AbcSortListingsComponent implements OnInit {

	sortIndicator: string;
	sortOptions: any[];

	constructor(public listingsService: ListingsService) { }

	ngOnInit() {
		this.sortOptions = [
			{sortKey: '-ListPrice', displayName: 'Price High to Low'},
			{sortKey: '+ListPrice', displayName: 'Price Low to High'},
			{sortKey: '-BuildingAreaTotal', displayName: 'Sqft High to Low'},
			{sortKey: '+BuildingAreaTotal', displayName: 'Sqft Low to High'}
		];
		this.sortIndicator = this.sortOptions[this.listingsService.sortIndex].displayName;
	}

	changeSort(sortIndex: number){
		this.sortIndicator = this.sortOptions[sortIndex].displayName;
		this.listingsService.sortKey = this.sortOptions[sortIndex].sortKey;
		this.listingsService.sortIndex = sortIndex;
		this.listingsService.paginationObject['CurrentPage'] = 1;
		this.listingsService.pageNumbers = [1, 2, 3, 4, 5];
		if (this.listingsService.activeComponent === 'filteredListings') {
			this.listingsService.getFilteredListings(
				this.listingsService.filterString,
				this.listingsService.searchText,
				1).subscribe(data => {
				this.listingsService.paginationObject = data;
			});
		} else if (this.listingsService.activeComponent === 'abcListings') {
			this.listingsService.setAbcListings(1).subscribe(data => {
				this.listingsService.paginationObject = data;
			});
		}
	}

}

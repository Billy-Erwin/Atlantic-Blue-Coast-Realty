import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'abc-sort-listings',
	templateUrl: './abc-sort-listings.component.html',
	styleUrls: ['./abc-sort-listings.component.css']
})
export class AbcSortListingsComponent implements OnInit {

	sortIndicator: string;
	sortOptions: any[];

	constructor() { }

	ngOnInit() {
		this.sortIndicator = 'Sort';
		this.sortOptions = [
			{sortKey: '+ListPrice', displayName: 'Price Low to High'},
			{sortKey: '-ListPrice', displayName: 'Price High to Low'},
			{sortKey: '+BuildingAreaTotal', displayName: 'Sqft Low to High'},
			{sortKey: '-BuildingAreaTotal', displayName: 'Sqft High to Low'}
		];
	}

	changeSort(sortIndicator: number){
		this.sortIndicator = this.sortOptions[sortIndicator].displayName;
	}

}

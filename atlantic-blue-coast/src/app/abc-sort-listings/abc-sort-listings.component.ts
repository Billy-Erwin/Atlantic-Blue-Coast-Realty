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
		this.sortOptions = [
			{sortKey: '-ListPrice', displayName: 'Price High to Low'},
			{sortKey: '+ListPrice', displayName: 'Price Low to High'},
			{sortKey: '-BuildingAreaTotal', displayName: 'Sqft High to Low'},
			{sortKey: '+BuildingAreaTotal', displayName: 'Sqft Low to High'}
		];
		this.sortIndicator = this.sortOptions[0].displayName;
	}

	changeSort(sortIndicator: number){
		this.sortIndicator = this.sortOptions[sortIndicator].displayName;
	}

}

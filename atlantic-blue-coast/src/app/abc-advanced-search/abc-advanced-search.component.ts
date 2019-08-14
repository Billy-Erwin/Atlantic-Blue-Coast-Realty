import { Component } from '@angular/core';
import * as searchOptions from '../../assets/files/advanced_search_options.json';
import {Listing} from "../Listing";
import {ListingsService} from "../listings.service";
import {AbcAdvancedSearch} from "../abc-advanced-search";
import {forEach} from "@angular/router/src/utils/collection";
// import searchOptions from '../../assets/files/';

@Component({
	selector: 'abc-advanced-search',
	templateUrl: './abc-advanced-search.component.html',
	styleUrls: ['./abc-advanced-search.component.css']
})
export class AbcAdvancedSearchComponent {
	advancedSearchOptions = {
		bedOptions : searchOptions['default']['beds'],
		bathOptions : searchOptions['default']['baths'],
		minYearBuiltOptions : searchOptions['default']['min_year_built'],
		maxYearBuiltOptions : searchOptions['default']['max_year_built'],
		minPriceOptions : searchOptions['default']['min_price'],
		maxPriceOptions : searchOptions['default']['max_price'],
		minSqftOptions : searchOptions['default']['min_sqft'],
		maxSqftOptions : searchOptions['default']['max_sqft'],
		minLotSizeOptions : searchOptions['default']['min_lot_size'],
		maxLotSizeOptions : searchOptions['default']['max_lot_size']
	}

	model = new AbcAdvancedSearch();

	private filteredListings: Listing[] = [];

	constructor(private listingsService: ListingsService) { }

	onSubmit(){
		console.log('submitting : ', this.model);
		this.model.formatQuery();
		console.log('theString : ', this.model.filterString);
		this.model.filterParameters = [];
		this.model.filterString = '_filter=';

		// let searchTextParameter = {searchText: this.model.searchText};
		// this.listingsService.getSimpleFilteredListings(searchTextParameter).subscribe(data => {
		// 	this.filteredListings = data;
		// })
	}

	minChanged(minValue, maxList, defaultListName){
		this.advancedSearchOptions[maxList] = [];
		searchOptions['default'][defaultListName].forEach(searchOption => {
			if(searchOption >= minValue){
				this.advancedSearchOptions[maxList].push(searchOption);
			}
		});
	}

	maxChanged(maxValue, minList, defaultListName){
		this.advancedSearchOptions[minList] = [];
		searchOptions['default'][defaultListName].forEach(searchOption => {
			if(searchOption <= maxValue){
				this.advancedSearchOptions[minList].push(searchOption);
			}
		});
	}
}

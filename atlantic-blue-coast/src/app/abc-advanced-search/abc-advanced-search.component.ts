import { Component } from '@angular/core';
import * as searchOptions from '../../assets/files/advanced_search_options.json';
import {ListingsService} from "../listings.service";
import {AbcAdvancedSearch} from "../abc-advanced-search";

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

	constructor(private listingsService: ListingsService) { }

	onSubmit(){
		// console.log('submitting : ', this.model);
		this.model.formatQuery();
		// console.log('theString : ', this.model.filterString);
		this.listingsService.getFilteredListings(
			this.model.filterString, this.model.searchText, 1).subscribe(listings => {
				// this.listingsService.setFilteredListings(listings).subscribe(data =>{});
			// this.listingsService.filteredListings = listings;
			// this.filteredListings = data;
				console.log('filteredListings : ', listings);
		});
		this.model.filterParameters = [];
		this.model.filterString = '';

		// let searchTextParameter = {searchText: this.model.searchText};
	}

	minChanged(minValue, maxList, defaultListName){
		if(minValue != null){
			if(minValue == 'Any'){
				this.advancedSearchOptions[maxList] = searchOptions['default'][defaultListName];
			} else {
				this.advancedSearchOptions[maxList] = [];
				searchOptions['default'][defaultListName].forEach(searchOption => {
					if(searchOption >= minValue){
						this.advancedSearchOptions[maxList].push(searchOption);
					}
				});
			}
		}
	}

	maxChanged(maxValue, minList, defaultListName){
		if(maxValue != null){
			if(maxValue == 'Any'){
				this.advancedSearchOptions[minList] = searchOptions['default'][defaultListName];
			} else {
				this.advancedSearchOptions[minList] = [];
				searchOptions['default'][defaultListName].forEach(searchOption => {
					if(searchOption <= maxValue){
						this.advancedSearchOptions[minList].push(searchOption);
					}
				});
			}
		}
	}
}

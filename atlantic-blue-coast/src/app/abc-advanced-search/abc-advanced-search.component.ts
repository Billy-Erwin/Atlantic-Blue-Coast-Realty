import { Component, OnDestroy, OnInit } from '@angular/core';
import * as searchOptions from '../../assets/files/advanced_search_options.json';
import { ListingsService } from "../listings.service";
import { AbcAdvancedSearch } from "../abc-advanced-search";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: 'abc-advanced-search',
	templateUrl: './abc-advanced-search.component.html',
	styleUrls: ['./abc-advanced-search.component.css']
})

export class AbcAdvancedSearchComponent implements OnInit, OnDestroy{
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

	paginationObject: any;

	model = new AbcAdvancedSearch();

	constructor(private listingsService: ListingsService, private route: ActivatedRoute) { }

	ngOnInit(){
		let searchText = this.route.snapshot.paramMap.get('searchText');
		if(searchText && searchText !== null){
			this.model.searchText = searchText;
			this.onSubmit();
		}
	}

	ngOnDestroy(){
		this.listingsService.filteredListings = [];
		this.paginationObject = {};
	}

	onSubmit(){
		this.model.formatQuery();
		this.listingsService.getFilteredListings(
			this.model.filterString, this.model.searchText, 1).subscribe(data => {
				this.paginationObject = data;
				this.paginationObject.filterString = this.model.filterString;
				this.paginationObject.searchText = this.model.searchText;
				this.paginationObject.page = 'filteredListings';
		});
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

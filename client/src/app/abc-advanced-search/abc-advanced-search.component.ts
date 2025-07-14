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

export class AbcAdvancedSearchComponent implements OnInit, OnDestroy {
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
	};
	title: string = 'Advanced MLS Search'

	model = new AbcAdvancedSearch({});

	constructor(private listingsService: ListingsService, private route: ActivatedRoute) { }

	ngOnInit() {
		if (this.route.snapshot.paramMap.get('queryData')) {
			let queryData = JSON.parse(this.route.snapshot.paramMap.get('queryData'));
			if (queryData['advancedSearchOptions']) {
				this.model =  new AbcAdvancedSearch(queryData['advancedSearchOptions']);
				this.listingsService.pageNumbers = queryData['pageNumbers'];
				this.listingsService.sortIndex = queryData['sortIndex'];
				this.listingsService.sortKey = queryData['sortKey'];
				this.onSubmit(queryData['currentPage']);
			} else if (queryData['searchText']) {
				this.model.searchText = queryData['searchText'];
				this.onSubmit(1);
			}
		}
	}

	ngOnDestroy() {
		this.listingsService.initializeSession();
	}

	onSubmit(page) {
		if(!page) {
			page = 1;
		}
		this.model.formatQuery();
		this.listingsService.advancedSearchOptions = this.model;
		this.listingsService.getFilteredListings(
			this.model.filterString, this.model.searchText, page).subscribe(data => {
				this.listingsService.paginationObject = data;
				this.listingsService.filterString = this.model.filterString;
				this.listingsService.searchText = this.model.searchText;
				this.listingsService.activeComponent = 'filteredListings';
		});
	}

	minChanged(minValue, maxList, defaultListName) {
		if (minValue != null) {
			if (minValue == 'Any') {
				this.advancedSearchOptions[maxList] = searchOptions['default'][defaultListName];
			} else {
				this.advancedSearchOptions[maxList] = [];
				searchOptions['default'][defaultListName].forEach(searchOption => {
					if (searchOption >= minValue) {
						this.advancedSearchOptions[maxList].push(searchOption);
					}
				});
			}
		}
	}

	maxChanged(maxValue, minList, defaultListName) {
		if (maxValue != null) {
			if (maxValue == 'Any') {
				this.advancedSearchOptions[minList] = searchOptions['default'][defaultListName];
			} else {
				this.advancedSearchOptions[minList] = [];
				searchOptions['default'][defaultListName].forEach(searchOption => {
					if (searchOption <= maxValue) {
						this.advancedSearchOptions[minList].push(searchOption);
					}
				});
			}
		}
	}
}
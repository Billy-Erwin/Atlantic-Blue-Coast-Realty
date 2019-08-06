import { Component, OnInit } from '@angular/core';
import * as searchOptions from '../../assets/files/advanced_search_options.json';
import {Listing} from "../Listing";
import {ListingsService} from "../listings.service";
import {AbcAdvancedSearch} from "../abc-advanced-search";
// import searchOptions from '../../assets/files/';

@Component({
	selector: 'abc-advanced-search',
	templateUrl: './abc-advanced-search.component.html',
	styleUrls: ['./abc-advanced-search.component.css']
})
export class AbcAdvancedSearchComponent implements OnInit {
	theOptions = searchOptions;
	theSearchOptions;
	model = new AbcAdvancedSearch();
	private filteredListings: Listing[] = [];

	constructor(private listingsService: ListingsService) { }

	onSubmit(){
		console.log('submitting : ', this.model);

		// let searchTextParameter = {searchText: this.model.searchText};
		// this.listingsService.getSimpleFilteredListings(searchTextParameter).subscribe(data => {
		// 	this.filteredListings = data;
		// })
	}

	ngOnInit() {
		this.theSearchOptions = this.theOptions['default'];
		console.log('search options : ', this.theOptions);
		// console.log('search options : ', this.theOptions.default.beds);
	}

}

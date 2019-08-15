import { Component } from '@angular/core';
import { ListingsService } from "../listings.service";
import { Listing } from "../Listing";
import { AbcSimpleSearch } from "../abc-simple-search";
import { Router } from "@angular/router";

@Component({
	selector: 'abc-simple-search',
	templateUrl: './abc-simple-search.component.html',
	styleUrls: ['./abc-simple-search.component.css']
})

export class AbcSimpleSearchComponent {

	model = new AbcSimpleSearch('');
	private filteredListings: Listing[] = [];

	constructor(private listingsService: ListingsService, private router: Router) { }

	onSubmit(){
		let searchTextParameter = {searchText: this.model.searchText};
		this.listingsService.getSimpleFilteredListings(searchTextParameter).subscribe(data => {
			this.filteredListings = data;
			this.listingsService.filteredListings = data;
			this.router.navigate(['/search']);
		});
	}

}

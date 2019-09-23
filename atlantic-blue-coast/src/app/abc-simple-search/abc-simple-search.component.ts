import { Component } from '@angular/core';
import { ListingsService } from "../listings.service";
import { AbcSimpleSearch } from "../abc-simple-search";
import { Router } from "@angular/router";

@Component({
	selector: 'abc-simple-search',
	templateUrl: './abc-simple-search.component.html',
	styleUrls: ['./abc-simple-search.component.css']
})

export class AbcSimpleSearchComponent {

	model = new AbcSimpleSearch('');

	constructor(private listingsService: ListingsService, private router: Router) { }

	onSubmit(){
		let searchTextParameter = {searchText: this.model.searchText};
		// this.router.navigate(['search', searchTextParameter]);
		this.router.navigate(['search', this.model.searchText]);
	}

}

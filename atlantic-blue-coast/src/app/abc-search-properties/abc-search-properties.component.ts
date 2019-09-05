import { Component } from '@angular/core';
import { ListingsService } from "../listings.service";

@Component({
	selector: 'abc-search-properties',
	templateUrl: './abc-search-properties.component.html',
	styleUrls: ['./abc-search-properties.component.css']
})
export class AbcSearchPropertiesComponent {

	constructor(private listingsService: ListingsService) { }

}

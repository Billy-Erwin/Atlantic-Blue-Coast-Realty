import { Component } from '@angular/core';
import {StandardFieldService} from "./standard-field.service";
import {ListingsService} from "./listings.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Atlantic Blue Coast Realty';

	constructor(
		public listingsService: ListingsService,
		public standardFieldService: StandardFieldService){
	}

	ngOnInit(){
		this.standardFieldService.setStandardFields().subscribe(data =>{});;
		this.listingsService.setFeaturedListings().subscribe(data =>{});
	}
}

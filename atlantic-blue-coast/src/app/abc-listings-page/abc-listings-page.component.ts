import { Component, OnInit } from '@angular/core';
import {ListingsService} from "../listings.service";

@Component({
	selector: 'abc-listings-page',
	templateUrl: './abc-listings-page.component.html',
	styleUrls: ['./abc-listings-page.component.css']
})
export class AbcListingsPageComponent implements OnInit {

	title: string = 'Atlantic Blue Coast Realty Listings';
	constructor(private listingsService: ListingsService) { }

	ngOnInit() {
		this.listingsService.setAbcListings().subscribe(data => {});
	}

}

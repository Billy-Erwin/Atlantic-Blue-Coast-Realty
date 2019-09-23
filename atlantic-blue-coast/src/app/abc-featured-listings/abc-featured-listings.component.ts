import {Component, OnInit} from '@angular/core';
import { ListingsService } from "../listings.service";

@Component({
	selector: 'abc-featured-listings',
	templateUrl: './abc-featured-listings.component.html',
	styleUrls: ['./abc-featured-listings.component.css']
})

export class AbcFeaturedListingsComponent implements OnInit{
	constructor(private listingsService: ListingsService) { }

	ngOnInit(){
		this.listingsService.setFeaturedListings().subscribe(data => {});
	}
}

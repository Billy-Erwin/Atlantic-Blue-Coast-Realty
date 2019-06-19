import { Injectable } from '@angular/core';
import { Listing } from "./Listing";
import { HttpClient } from '@angular/common/http'

@Injectable({providedIn: 'root'})

export class ListingsService {
	constructor(private http: HttpClient) {}

	getFeaturedListings(listings) {
		this.http.get('http://localhost:4040/getFeaturedListings').subscribe(
			data => {
				// console.log(data);
				for(let i = 0; i < 4; i++){
					listings.push(new Listing(data[i]));
				}
		});
	}

	getSelectedListing(theListing, listingId) {
		let listingUrl = `http://localhost:4040/getSelectedListing?id=${listingId}`
		this.http.get(listingUrl).subscribe(
			data => {
				theListing = data;
				console.log(data);
		});
	}
}

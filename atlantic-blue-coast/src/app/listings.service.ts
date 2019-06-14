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
				console.log(data[0]);
				for(let i = 0; i < 4; i++){
					console.log(data[i].Id);
					listings.push(new Listing(data[i]));
				}
		});
	}

	getSelectedListing(listingId) {
		let listingUrl = `http://localhost:4040/getSelectedListing?id=${listingId}`
		this.http.get(listingUrl).subscribe(
			data => {
				console.log(data);
		});
	}
}

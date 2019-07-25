import { Injectable } from '@angular/core';
import { Listing } from "./Listing";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import {	map } from "rxjs/operators";

@Injectable({providedIn: "root"})

export class ListingsService {
	featuredListings: Listing[] = [];
	constructor(private http: HttpClient) {}

	setFeaturedListings(): Observable<Listing[]> {
		this.featuredListings = [];
		let listingUrl = `http://localhost:4040/getFeaturedListings`;
		return this.http.get(listingUrl).pipe(map(data => {
			for(let i = 0; i < 6; i++){
				this.featuredListings.push(new Listing(data[i]));
			}
			return this.featuredListings;
		}));
	}

	getFeaturedListings(): Observable<Listing[]> {
		let returnFeaturedListings: Listing[] = [];
		let listingUrl = `http://localhost:4040/getFeaturedListings`;
		return this.http.get(listingUrl).pipe(map(data => {
			for(let i = 0; i < 6; i++){
				returnFeaturedListings.push(new Listing(data[i]));
			}
			return returnFeaturedListings;
		}));
	}

	getSelectedListing(listingId): Observable<Listing> {
		let listingUrl = `http://localhost:4040/getSelectedListing?id=${listingId}`;
		return this.http.get(listingUrl).pipe(map(res => {
			// console.log(res);
			// console.log(res[0]['StandardFields']);
			// console.log(res[0]['CustomFields']);
			let mainCategories = Object.keys(res[0]['CustomFields'][0]);
			for(let mainCategory of mainCategories){
				console.log(mainCategory);
				let subCategories = res[0]['CustomFields'][0][mainCategory];
				for(let i = 0; i < subCategories.length; i++){
					// console.log('Index : ' + i + ' : ', subCategories[i]);
					let subCategory = Object.keys(subCategories[i])[0];
					console.log('  ', subCategory);
					let customFields = subCategories[i][subCategory];
					for(let customField of customFields){
						// console.log('     ', customField);
						let fieldName = Object.keys(customField)[0];
						console.log('     ' + fieldName + ' : ' + customField[fieldName]);
						// console.log('     isArray : ', customField);
					}
				}
				// console.log(customFields);
			}
			// console.log(mainCategories);
			return new Listing(res[0]);
		}));
	}
}

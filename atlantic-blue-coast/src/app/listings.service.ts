import { Injectable } from '@angular/core';
import { Listing } from "./Listing";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import {	map } from "rxjs/operators";

@Injectable({providedIn: "root"})

export class ListingsService {
	featuredListings: Listing[] = [];
	filteredListings: Listing[] = [];
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

	setFilteredListings(listings) {
		this.featuredListings = [];
		return this.featuredListings;
		// let listingUrl = `http://localhost:4040/getFeaturedListings`;
		// return this.http.get(listingUrl).pipe(map(data => {
		// 	for(let i = 0; i < 6; i++){
		// 		this.featuredListings.push(new Listing(data[i]));
		// 	}
		// 	return this.featuredListings;
		// }));
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

	getFilteredListings(filterString, searchText): Observable<Listing[]> {
		let returnFilteredListings: Listing[] = [];
		console.log(filterString);
		console.log(searchText);
		// let queryString = Object.keys(filterString).map(key => key + '=' + filterString[key]).join('&');
		// console.log('queryString : ', queryString);
		let listingUrl = `http://localhost:4040/getFilteredListings?filterString=${filterString}&searchText=${searchText}`;
		return this.http.get(listingUrl).pipe(map(data => {
			for(let listing of <object[]> data){
				console.log('listing : ', listing['StandardFields']['Photos']);
				returnFilteredListings.push(new Listing(listing));
			}
			this.filteredListings = returnFilteredListings;
			return returnFilteredListings;
		}));
	}

	getSimpleFilteredListings(params): Observable<Listing[]> {
		let returnFilteredListings: Listing[] = [];
		let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
		console.log('queryString : ', queryString);
		let listingUrl = `http://localhost:4040/getSimpleFilteredListings?${queryString}`;
		return this.http.get(listingUrl).pipe(map(data => {
			for(let listing of <object[]> data){
				console.log('listing : ', listing['StandardFields']['Photos']);
				returnFilteredListings.push(new Listing(listing));
			}
			return returnFilteredListings;
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

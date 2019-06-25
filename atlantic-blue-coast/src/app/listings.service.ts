import { Injectable } from '@angular/core';
import { Listing } from "./Listing";
import { HttpClient } from '@angular/common/http'
import {Observable, ObservedValueOf} from "rxjs";
import {
	map,
	debounceTime,
	distinctUntilChanged,
	switchMap,
	tap
} from "rxjs/operators";

@Injectable({providedIn: 'root'})

export class ListingsService {
	constructor(private http: HttpClient) {}

	getFeaturedListings1(listings) {
		this.http.get('http://localhost:4040/getFeaturedListings').subscribe(
			data => {
				for(let i = 0; i < 4; i++){
					listings.push(new Listing(data[i]));
				}
		});
	}
	getFeaturedListings(): Observable<Listing[]> {
		let listings: Listing[] = [];
		let listingUrl = `http://localhost:4040/getFeaturedListings`;
		return this.http.get(listingUrl).pipe(map(data => {
			for(let i = 0; i < 4; i++){
				listings.push(new Listing(data[i]));
			}
			return listings;
		}));
	}

	getSelectedListing(listingId): Observable<Listing> {
		let listingUrl = `http://localhost:4040/getSelectedListing?id=${listingId}`;
		return this.http.get(listingUrl).pipe(map(res => {
			console.log(res);
			return new Listing(res[0]);
		}));
	}
}

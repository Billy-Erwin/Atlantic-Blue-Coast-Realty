import { Injectable } from '@angular/core';
import { Listing } from "./Listing";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({providedIn: "root"})

export class ListingsService {
	featuredListings: Listing[] = [];
	abcListings: Listing[] = [];
	filteredListings: Listing[] = [];
	baseUrl: string = 'http://localhost:4040/';
	// baseUrl: string = 'http://52.15.233.116:4040/';
	constructor(private http: HttpClient) {}

	setFeaturedListings(): Observable<Listing[]> {
		this.featuredListings = [];
		let listingUrl = `${this.baseUrl}getFeaturedListings`;
		return this.http.get(listingUrl).pipe(map(data => {
			for(let i = 0; i < 6; i++){
				this.featuredListings.push(new Listing(data['listings'][i]));
			}
			return this.featuredListings;
		}));
	}

	setAbcListings(page): Observable<any[]> {
		this.abcListings = [];
		let listingUrl = `${this.baseUrl}getAbcListings?page=${page}`;
		return this.http.get(listingUrl).pipe(map(data => {
			for(let listing of <object[]> data['listings']){
				this.abcListings.push(new Listing(listing));
			}
			return data['pagination'];
		}));
	}

	getFilteredListings(filterString, searchText, page): Observable<any[]> {
		this.filteredListings = [];
		let listingUrl = `${this.baseUrl}getFilteredListings?filterString=${filterString}&searchText=${searchText}&page=${page}`;
		return this.http.get(listingUrl).pipe(map(data => {
			for(let listing of data['listings']){
				this.filteredListings.push(new Listing(listing));
			}
			return data['pagination'];
		}));
	}

	getSelectedListing(listingId): Observable<Listing> {
		let listingUrl = `${this.baseUrl}getSelectedListing?id=${listingId}`;
		return this.http.get(listingUrl).pipe(map(res => {
			return new Listing(res[0]);
		}));
	}
}

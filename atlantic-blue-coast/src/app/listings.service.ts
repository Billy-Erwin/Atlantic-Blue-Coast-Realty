import { Injectable } from '@angular/core';
import { Listing } from "./Listing";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import {	map } from "rxjs/operators";

@Injectable({providedIn: "root"})

export class ListingsService {
	featuredListings: Listing[] = [];
	abcListings: Listing[] = [];
	filteredListings: Listing[] = [];
	constructor(private http: HttpClient) {}

	setFeaturedListings(): Observable<Listing[]> {
		this.featuredListings = [];
		let listingUrl = `http://localhost:4040/getFeaturedListings?limit=true`;
		return this.http.get(listingUrl).pipe(map(data => {
			for(let i = 0; i < 6; i++){
				this.featuredListings.push(new Listing(data[i]));
			}
			return this.featuredListings;
		}));
	}

	setAbcListings(): Observable<Listing[]> {
		let returnAbcListings: Listing[] = [];
		this.abcListings = [];
		let listingUrl = `http://localhost:4040/getFeaturedListings?limit=false`;
		return this.http.get(listingUrl).pipe(map(data => {
			for(let listing of <object[]> data){
				returnAbcListings.push(new Listing(listing));
			}
			this.abcListings = returnAbcListings;
			return returnAbcListings;
		}));
	}

	getFeaturedListings(): Observable<Listing[]> {
		let returnFeaturedListings: Listing[] = [];
		let listingUrl = `http://localhost:4040/getFeaturedListings?limit=true`;
		return this.http.get(listingUrl).pipe(map(data => {
			for(let i = 0; i < 6; i++){
				returnFeaturedListings.push(new Listing(data[i]));
			}
			return returnFeaturedListings;
		}));
	}

	getFilteredListings(filterString, searchText): Observable<Listing[]> {
		let returnFilteredListings: Listing[] = [];
		let listingUrl = `http://localhost:4040/getFilteredListings?filterString=${filterString}&searchText=${searchText}`;
		return this.http.get(listingUrl).pipe(map(data => {
			for(let listing of <object[]> data){
				returnFilteredListings.push(new Listing(listing));
			}
			this.filteredListings = returnFilteredListings;
			return returnFilteredListings;
		}));
	}

	getSimpleFilteredListings(params): Observable<Listing[]> {
		let returnFilteredListings: Listing[] = [];
		let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
		let listingUrl = `http://localhost:4040/getSimpleFilteredListings?${queryString}`;
		return this.http.get(listingUrl).pipe(map(data => {
			for(let listing of <object[]> data){
				returnFilteredListings.push(new Listing(listing));
			}
			return returnFilteredListings;
		}));
	}

	getSelectedListing(listingId): Observable<Listing> {
		let listingUrl = `http://localhost:4040/getSelectedListing?id=${listingId}`;
		return this.http.get(listingUrl).pipe(map(res => {
			return new Listing(res[0]);
		}));
	}
}

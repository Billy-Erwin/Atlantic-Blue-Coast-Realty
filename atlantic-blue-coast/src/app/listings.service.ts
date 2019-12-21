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

	paginationObject: any = {};
	activeComponent: string = '';
	searchText: string = '';
	filterString: string = '';
	sortKey: string =  '-ListPrice';
	sortIndex: number = 0;
	pageNumbers: number[] = [1, 2, 3, 4, 5];

	baseUrl: string = 'http://localhost:4040/';
	// baseUrl: string = 'http://52.15.233.116:4040/';
	constructor(private http: HttpClient) {}

	initializeSession(){
		this.abcListings = [];
		this.filteredListings = [];
		this.sortIndex = 0;
		this.sortKey = '-ListPrice';
		this.pageNumbers = [1, 2, 3, 4, 5];
		this.paginationObject = {};
		this.activeComponent = '';
		this.searchText = '';
		this.filterString = '';
	}

	setFeaturedListings(): Observable<Listing[]> {
		if (this.featuredListings.length > 0){
			return new Observable<Listing[]>();
		}
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
		let listingUrl = `${this.baseUrl}getAbcListings?page=${page}&orderby=${this.sortKey}`;
		return this.http.get(listingUrl).pipe(map(data => {
			for(let listing of <object[]> data['listings']){
				this.abcListings.push(new Listing(listing));
			}
			return data['pagination'];
		}));
	}

	getFilteredListings(filterString, searchText, page): Observable<any[]> {
		this.filteredListings = [];
		let listingUrl = `${this.baseUrl}getFilteredListings?filterString=${filterString}&searchText=${searchText}&page=${page}&orderBy=${this.sortKey}`;
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
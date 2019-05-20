import { Injectable } from '@angular/core';
import { Observable, of} from "rxjs";
import { Listing } from "./Listing";
import {LISTINGS} from "./mock-listings";

@Injectable({
	providedIn: 'root'
})

export class ListingsService {

	constructor() { }

	getListings(): Observable<Listing[]>  {
		return of(LISTINGS);
	}
}

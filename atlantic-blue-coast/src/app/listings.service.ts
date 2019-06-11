import { Injectable } from '@angular/core';
import { Observable, of} from "rxjs";
import { Listing } from "./Listing";
import { HttpClient } from '@angular/common/http'
import {LISTINGS} from "./mock-listings";


@Injectable({providedIn: 'root'})

export class ListingsService {
	constructor(private http: HttpClient) {}

	getListings(): Observable<Listing[]>  {
		return of(LISTINGS);
	}

	doSomething(listings) {
		this.http.get('http://localhost:4040/something').subscribe(
			data => {
				console.log(data);
				for(let i = 0; i < 4; i++){
					listings.push(new Listing(data[i].StandardFields));
				}
		});
	}


}

import { Injectable } from '@angular/core';
import { Observable, of} from "rxjs";
import { Listing } from "./Listing";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {LISTINGS} from "./mock-listings";

const authCode = '5jsd6bddn8v55fmelsn3d3mlo';
const options = {
	"client_id": "evszqvvzkph2kz5l0ap7ebked",
	"client_secret":  "d93heo1w4pvo30i49tkje30co",
	"grant_type": "authorization_code",
	"code": authCode,
	"redirect_uri": " https://sparkplatform.com/oauth2/callback",
}
const httpOptions = {
	headers: new HttpHeaders(options)
};

@Injectable({
	providedIn: 'root'
})

export class ListingsService {

	private listingsUrl = '';

	constructor(
		private http: HttpClient
	) { }

	getListings(): Observable<Listing[]>  {
		return of(LISTINGS);
	}

	// https://sparkplatform.com/openid/authorize?client_id=evszqvvzkph2kz5l0ap7ebked&scope=openid&response_type=code&redirect_uri=https://sparkplatform.com/oauth2/callback

}

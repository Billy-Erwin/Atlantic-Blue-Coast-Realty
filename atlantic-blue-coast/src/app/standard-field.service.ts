import { Injectable } from '@angular/core';
import { StandardField } from "./StandardField";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ListingsService } from "./listings.service";

@Injectable({providedIn: 'root'})
export class StandardFieldService {
	standardFields: StandardField[] = [];
	standardFieldsMap: Map<string, StandardField> = new Map<string, StandardField>();

	constructor(private http: HttpClient, private listingsService: ListingsService) {}

	setStandardFields(): Observable<Map<string, StandardField>> {
		let listingUrl = `${this.listingsService.baseUrl}getStandardFieldMetadata`;
		return this.http.get(listingUrl).pipe(map(data => {
			let resKeys = Object.keys(data[0]);
			for(let theKey of resKeys){
				// console.log(theKey);
				this.standardFields.push(new StandardField(theKey, data[0][theKey]));
				this.standardFieldsMap.set(theKey, new StandardField(theKey, data[0][theKey]))
			}
			// console.log(this.standardFieldsMap);
			return this.standardFieldsMap
		}));
	}
}

import {Component, Input, OnInit} from '@angular/core';
import {Listing} from "../Listing";

@Component({
	selector: 'abc-listing-details',
	templateUrl: './abc-listing-details.component.html',
	styleUrls: ['./abc-listing-details.component.css']
})
export class AbcListingDetailsComponent implements OnInit {

	@Input() selectedListing: Listing;
	keys: any[];

	constructor() { }

	ngOnInit() {
		this.keys = [];
		// console.log('selectedListing : ', this.selectedListing.customFields);
		// console.log('selectedListing : ', this.selectedListing.standardFields);
		// console.log('Main : ', this.aInfoList[0]);
		// console.log('keys : ', Object.keys(this.aInfoList['Main']));
		// this.keys = this.selectedListing.detailSections.keys();
		// console.log('key please : ', this.keys);
		// console.log('entries: ', this.selectedListing.detailSections.entries());
		// console.log('stuff : ', this.selectedListing.detailSections.get('Address Info'));
		if(this.selectedListing.detailSections){

			this.selectedListing.detailSections.forEach((value, key) => {
				this.keys.push(key);
				// console.log('key please : ', key);
				// console.log('value please : ', value);
			});
		}
		// console.log('this.keys : ', this.keys);
		// for(let key of this.keys){
		//
		// 	console.log('value please : ', this.selectedListing.detailSections.get(key));
		// }
		// for (let [key, value] of this.selectedListing.detailSections.entries()) {
		// 	console.log(key + ' = ' + value);
		// }
	}

}

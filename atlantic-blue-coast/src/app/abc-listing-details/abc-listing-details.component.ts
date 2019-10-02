import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'abc-listing-details',
	templateUrl: './abc-listing-details.component.html',
	styleUrls: ['./abc-listing-details.component.css']
})
export class AbcListingDetailsComponent implements OnInit {

	@Input() aInfoList;
	keys;

	constructor() { }

	ngOnInit() {
		console.log('aInfoList : ', this.aInfoList);
		// console.log('Main : ', this.aInfoList[0]);
		// console.log('keys : ', Object.keys(this.aInfoList['Main']));
		this.keys = Object.keys(this.aInfoList['Main']);
	}

}

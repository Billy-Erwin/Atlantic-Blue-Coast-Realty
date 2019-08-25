import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'abc-listing-details',
	templateUrl: './abc-listing-details.component.html',
	styleUrls: ['./abc-listing-details.component.css']
})
export class AbcListingDetailsComponent implements OnInit {

	@Input() aInfoList;
	infoList = [];
	constructor() { }

	ngOnInit() {
		console.log(this.aInfoList);
	}

}

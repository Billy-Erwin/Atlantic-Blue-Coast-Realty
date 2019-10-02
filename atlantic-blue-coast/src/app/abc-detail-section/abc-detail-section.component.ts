import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'abc-detail-section',
	templateUrl: './abc-detail-section.component.html',
	styleUrls: ['./abc-detail-section.component.css']
})
export class AbcDetailSectionComponent implements OnInit {

	@Input() tableData;
	@Input() tableLabel;
	fields;
	constructor() { }

	ngOnInit() {
		// console.log('tableLabel : ', this.tableLabel);
		// console.log('tableData : ', this.tableData);
		this.fields = Object.keys(this.tableData);
		// console.log('fields : ', this.fields);
		// this.tableData = {
		// 	category: 'Basic Info',
		// 	fields: [
		// 		{label: 'Beds', value: 3},
		// 		{label: 'Baths', value: 2},
		// 		{label: 'Sqft', value: 3}
		// 	]
		// }
	}

}

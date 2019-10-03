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
		this.fields = Object.keys(this.tableData);
	}

}

import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'abc-document-dropdown',
	templateUrl: './abc-document-dropdown.component.html',
	styleUrls: ['./abc-document-dropdown.component.css']
})
export class AbcDocumentDropdownComponent implements OnInit {

	availableDocuments: any[] = [];
	constructor() { }

	ngOnInit() {
		this.availableDocuments.push(
			{
				documentLink: '../../assets/documents/THE_SPILLWAY_rules_v4.1.pdf',
				documentLabel: 'The Spillway Rules'
			},
			{
				documentLink: '../../assets/documents/Working_With_Real_Estate_Agents_NCREC.pdf',
				documentLabel: 'Working With Real Estate Agents'
			},
			{
				documentLink: '../../assets/documents/Working_with_Real_Estate_Agents_Commercial.pdf',
				documentLabel: 'Working With Real Estate Agents (Commercial)'
			},
			{
				documentLink: '../../assets/documents/Working_with_Real_Estate_Agents_Lease_Transaction_Commercial.pdf',
				documentLabel: 'Working With Real Estate Agents (Lease)'
			},
			{
				documentLink: '../../assets/documents/Residential_Rental_Application_w_policy.pdf',
				documentLabel: 'Residential Rental Application'
			}
		);
	}

}

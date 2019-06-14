import {Component, OnInit} from '@angular/core';
import {ListingsService} from "../listings.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {Listing} from "../Listing";

@Component({
	selector: 'abc-selected-listing',
	templateUrl: './abc-selected-listing.component.html',
	styleUrls: ['./abc-selected-listing.component.css']
})
export class AbcSelectedListingComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private listingsService: ListingsService) { }

	ngOnInit() {
		this.getSelectedListing();
	}

	getSelectedListing(): void {
		let id = this.route.snapshot.paramMap.get('id');

		console.log('theId : ', id);
		this.listingsService.getSelectedListing(id);
	}

}

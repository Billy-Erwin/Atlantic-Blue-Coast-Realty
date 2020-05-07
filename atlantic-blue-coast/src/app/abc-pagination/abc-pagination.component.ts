import { Component } from '@angular/core';
import { ListingsService } from '../listings.service';

@Component({
	selector: 'abc-pagination',
	templateUrl: './abc-pagination.component.html',
	styleUrls: ['./abc-pagination.component.css']
})

export class AbcPaginationComponent {

	constructor(public listingsService: ListingsService) { }

	changePage(pageNumber) {
		this.listingsService.setPageNumberArray(pageNumber);

		if (this.listingsService.activeComponent === 'filteredListings') {
			this.listingsService.getFilteredListings(
				this.listingsService.filterString,
				this.listingsService.searchText,
				pageNumber).subscribe(data => {});
		} else if (this.listingsService.activeComponent === 'abcListings') {
			this.listingsService.setAbcListings(this.listingsService.paginationObject['CurrentPage']).subscribe(data => {});
		}

	}
}

import { Component } from '@angular/core';
import { ListingsService } from "../listings.service";

@Component({
	selector: 'abc-pagination',
	templateUrl: './abc-pagination.component.html',
	styleUrls: ['./abc-pagination.component.css']
})

export class AbcPaginationComponent {

	constructor(public listingsService: ListingsService) { }

	changePage(pageNumber) {
		this.listingsService.paginationObject['CurrentPage'] = pageNumber;
		if (this.listingsService.pageNumbers[4] == this.listingsService.paginationObject['CurrentPage'] ||
			this.listingsService.paginationObject['CurrentPage'] == 1 ||
			this.listingsService.paginationObject['CurrentPage'] == this.listingsService.pageNumbers[0] - 1 ||
			this.listingsService.paginationObject['CurrentPage'] == this.listingsService.paginationObject['TotalPages']) {
			this.listingsService.pageNumbers = [pageNumber, pageNumber + 1, pageNumber + 2, pageNumber + 3, pageNumber + 4];
		}

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

import {Component, Input } from '@angular/core';
import {ListingsService} from "../listings.service";

@Component({
	selector: 'abc-pagination',
	templateUrl: './abc-pagination.component.html',
	styleUrls: ['./abc-pagination.component.css']
})

export class AbcPaginationComponent {

	@Input() paginationObject;
	pageNumbers: number[];

	constructor(private listingsService: ListingsService) { }

	ngOnChanges() {
		this.pageNumbers = [1, 2, 3, 4, 5];
	}

	changePage(pageNumber){
		this.paginationObject['CurrentPage'] = pageNumber;
		if(this.pageNumbers[4] == this.paginationObject['CurrentPage'] || this.paginationObject['CurrentPage'] == this.pageNumbers[0] - 1){
			this.pageNumbers = [pageNumber, pageNumber + 1, pageNumber + 2, pageNumber + 3, pageNumber + 4];
		}
		this.listingsService.getFilteredListings(
			this.paginationObject.filterString, this.paginationObject.searchText, pageNumber).subscribe(data => {
		});
	}
}

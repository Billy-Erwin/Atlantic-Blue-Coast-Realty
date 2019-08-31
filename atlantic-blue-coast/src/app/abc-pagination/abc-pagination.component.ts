import {Component, Input, OnInit} from '@angular/core';
import {ListingsService} from "../listings.service";

@Component({
	selector: 'abc-pagination',
	templateUrl: './abc-pagination.component.html',
	styleUrls: ['./abc-pagination.component.css']
})
export class AbcPaginationComponent implements OnInit {

	@Input() paginationObject;
	currentPage: number;
	lastPage: number;
	pageNumbers: number[] = [1, 2, 3, 4, 5];

	constructor(private listingsService: ListingsService) { }

	ngOnInit() {
		this.currentPage = 1;
	}

	changePage(pageNumber){
		console.log('oh my lawd : ', this.paginationObject);
		console.log(pageNumber);
		this.currentPage = pageNumber;
		if(this.pageNumbers[4] == this.currentPage || this.currentPage == this.pageNumbers[0] - 1){
			this.pageNumbers = [pageNumber, pageNumber + 1, pageNumber + 2, pageNumber + 3, pageNumber + 4];
		}
		this.listingsService.getFilteredListings(
			this.paginationObject.filterString, this.paginationObject.searchText, pageNumber).subscribe(data => {
		});
	}
}

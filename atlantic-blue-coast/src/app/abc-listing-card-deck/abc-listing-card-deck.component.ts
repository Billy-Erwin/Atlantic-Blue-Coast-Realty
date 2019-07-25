import { Component } from '@angular/core';
import * as $ from "jquery";
import { ListingsService } from "../listings.service";

@Component({
	selector: 'abc-listing-card-deck',
	templateUrl: './abc-listing-card-deck.component.html',
	styleUrls: ['./abc-listing-card-deck.component.css']
})
export class AbcListingCardDeckComponent {
	title: string = 'Atlantic Blue Coast Featured Listings';

	constructor(private listingsService: ListingsService) { }

	ngAfterViewInit() {
		$('.carousel-item').each(function(){
			let minPerSlide = 4;
			let next = $(this).next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}
			next.children(':first-child').clone().appendTo($(this));

			for (let i = 0; i < minPerSlide; i++){
				next = next.next();
				if(!next.length){
					next = $(this).siblings(':first');
				}
				next.children(':first-child').clone().appendTo($(this));
			}
		});
	}
}

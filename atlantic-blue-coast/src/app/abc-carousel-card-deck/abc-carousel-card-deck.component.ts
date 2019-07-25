import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Listing} from "../Listing";
import {ListingsService} from "../listings.service";

@Component({
	selector: 'abc-carousel-card-deck',
	templateUrl: './abc-carousel-card-deck.component.html',
	styleUrls: ['./abc-carousel-card-deck.component.css']
})
export class AbcCarouselCardDeckComponent implements OnInit {

	listings: Listing[] = [];
	title: string = 'Atlantic Blue Coast Featured Listings';
	constructor(private listingsService: ListingsService) { }

	ngOnInit(){
		this.listings = this.listingsService.featuredListings;
	}

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

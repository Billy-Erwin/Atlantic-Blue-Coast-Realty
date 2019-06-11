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

	listings: Listing[];
	constructor(private listingsService: ListingsService) { }

	public ngOnInit()	{
		this.getListings();
		$(document).ready(function(){
			// $('#recipeCarousel').carousel({
			// 	interval: 10000
			// })
			$('.next').click(function(){
				$('.carousel').carousel('next');
				console.log('next');
				return false;
			});
			$('.prev').click(function(){
				// $('.carousel').carousel('prev');
				console.log('previous');
				return false;
			});
			// $('.carousel .carousel-item').each(function(){
			// 	var next = $(this).next();
			// 	if (!next.length) {
			// 		next = $(this).siblings(':first');
			// 	}
			// 	next.children(':first-child').clone().appendTo($(this));
			//
			// 	for (var i = 0; i < 4; i++) {
			// 		next=next.next();
			// 		if (!next.length) {
			// 			next = $(this).siblings(':first');
			// 		}
			//
			// 		next.children(':first-child').clone().appendTo($(this));
			// 	}
			// });
		});
	}

	getListings(): void {
		this.listingsService.getListings()
				.subscribe(listings => this.listings = listings);
	}
}

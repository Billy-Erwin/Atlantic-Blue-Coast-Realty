import {Component, Input} from '@angular/core';
import * as $ from 'jquery';
import {ListingsService} from "../listings.service";
import { Router } from "@angular/router";

@Component({
	selector: 'abc-carousel-card-deck',
	templateUrl: './abc-carousel-card-deck.component.html',
	styleUrls: ['./abc-carousel-card-deck.component.css']
})
export class AbcCarouselCardDeckComponent {

	@Input() listings;
	title: string = 'Atlantic Blue Coast Featured Listings';
	constructor(private router: Router, private listingsService: ListingsService) { }

	ngAfterViewInit() {
		let theRouter = this.router;
		$('.carousel .carousel-item').each(function(){
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
		$('.listing-card').each(function(){
			$(this).click(function () {
				theRouter.navigate(['/selected-listing', this.id])
			});
		});
	}
}

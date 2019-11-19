import { Component, Input } from '@angular/core';
import { ListingsService } from "../listings.service";
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
		this.setCarouselSize(4);

		$('.listing-card').each(function(){
			$(this).click(function () {
				theRouter.navigate(['/selected-listing', this.id])
			});
		});

		$(window).resize(() => {
			console.log('this.width : ', $(window).width());
		})
	}

	setCarouselSize(theNumber: number){
		let theRouter = this.router;
		$('#recipeCarousel .carousel-item').each(function(){
			let minPerSlide = theNumber;
			let next = $(this).next();
			console.log('id : ', this.id);
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

import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
	selector: 'abc-carousel-card-deck',
	templateUrl: './abc-carousel-card-deck.component.html',
	styleUrls: ['./abc-carousel-card-deck.component.css']
})
export class AbcCarouselCardDeckComponent implements OnInit{

	@Input() listings;
	title: string = 'Atlantic Blue Coast Realty Featured Listings';
	currentClassState;
	constructor(private router: Router) { }

	ngOnInit() {
		$(window).resize(() => {
			this.updateTheSlides($(window).width());
			this.setCarouselSize();
		});
	}

	updateTheSlides(windowWidth: number) {
		let newClassState = '';
		let oldClassState = this.currentClassState;

		if(windowWidth > 1199){
			newClassState = 'col-3';
		} else if (windowWidth >= 992 && windowWidth < 1200) {
			newClassState = 'col-4';
		} else if (windowWidth >= 768 && windowWidth < 992) {
			newClassState = 'col-6';
		} else if (windowWidth  < 768) {
			newClassState = 'col-12';
		}
		this.currentClassState = newClassState;

		$('#recipeCarousel .carousel-item .listingCardContainer').each(function(){
			$(this).removeClass(oldClassState);
			$(this).addClass(newClassState);
		});
	}

	ngAfterViewInit() {
		let theRouter = this.router;
		this.updateTheSlides($(window).width());
		this.setCarouselSize();

		$('.listing-card').each(function(){
			$(this).click(function () {
				theRouter.navigate(['/selected-listing', JSON.stringify({id: this.id})])
			});
		});
	}

	setCarouselSize(){
		$('#recipeCarousel .carousel-item').each(function(){
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
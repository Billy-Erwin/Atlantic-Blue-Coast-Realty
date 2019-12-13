import { Component, Input, OnInit } from '@angular/core';
import { ListingsService } from "../listings.service";
import { Router } from "@angular/router";

@Component({
	selector: 'abc-carousel-card-deck',
	templateUrl: './abc-carousel-card-deck.component.html',
	styleUrls: ['./abc-carousel-card-deck.component.css']
})
export class AbcCarouselCardDeckComponent implements OnInit{

	@Input() listings;
	title: string = 'Atlantic Blue Coast Featured Listings';
	aClassILike;
	constructor(private router: Router, private listingsService: ListingsService) { }

	ngOnInit() {
		$(window).resize(() => {
			this.updateTheSlides($(window).width());
			this.setCarouselSize();
		});
	}

	updateTheSlides(windowWidth: number) {

		let aNewClass = '';
		let theOldClass = this.aClassILike;

		if(windowWidth > 1199){
			aNewClass = 'col-3';
		} else if (windowWidth >= 992 && windowWidth < 1200) {
			aNewClass = 'col-4';
		} else if (windowWidth >= 768 && windowWidth < 992) {
			aNewClass = 'col-6';
		} else if (windowWidth  < 768) {
			aNewClass = 'col-12';
		}
		this.aClassILike = aNewClass;

		$('#recipeCarousel .carousel-item .thisOne').each(function(){
			$(this).removeClass(theOldClass);
			$(this).addClass(aNewClass);
		});
	}

	ngAfterViewInit() {
		let theRouter = this.router;
		this.updateTheSlides($(window).width());
		this.setCarouselSize();

		$('.listing-card').each(function(){
			$(this).click(function () {
				theRouter.navigate(['/selected-listing', this.id])
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
import {Component, Input, OnInit} from '@angular/core';
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
	numberOfSlides: number = 3;
	aClassILike;
	constructor(private router: Router, private listingsService: ListingsService) { }

	ngOnInit() {
		let windowWidth = $(window).width();
		console.log('get width it : ', windowWidth);
		if(windowWidth > 1199){
			this.aClassILike = 'col-3';
		} else if (windowWidth >= 992 && windowWidth < 1200) {
			this.aClassILike = 'col-4';
		} else if (windowWidth >= 768 && windowWidth < 992) {
			this.aClassILike = 'col-6';
		} else if (windowWidth  < 768) {
			this.aClassILike = 'col-12';
		}
	}

	ngAfterViewInit() {
		let theRouter = this.router;
		let windowWidth = $(window).width();
		console.log('get width it : ', windowWidth);
		// if(windowWidth > 1199){
		// 	this.aClassILike = 'col-3';
		// } else if (windowWidth >= 992 && windowWidth < 1200) {
		// 	this.aClassILike = 'col-4';
		// } else if (windowWidth >= 768 && windowWidth < 992) {
		// 	this.aClassILike = 'col-6';
		// } else if (windowWidth  < 768) {
		// 	this.aClassILike = 'col-12';
		// }
		this.setCarouselSize(this.numberOfSlides);

		$('.listing-card').each(function(){
			$(this).click(function () {
				theRouter.navigate(['/selected-listing', this.id])
			});
		});

		$(window).resize(() => {
			// console.log('this.width : ', $(window).width());
			let startedState = this.numberOfSlides;
			let windowWidth = $(window).width();
			if(windowWidth > 1199){
				startedState = 4;
				this.aClassILike = 'col-3';
			} else if (windowWidth >= 992 && windowWidth < 1200) {
				startedState = 3;
				this.aClassILike = 'col-4';
			} else if (windowWidth >= 768 && windowWidth < 992) {
				startedState = 2;
				this.aClassILike = 'col-6';
			} else if (windowWidth  < 768) {
				startedState = 1;
				this.aClassILike = 'col-12';
			}
			// if(startedState != this.numberOfSlides){
			// 	this.setCarouselSize(startedState);
			// }
		})
	}

	setCarouselSize(theNumber: number){
		let theRouter = this.router;
		let itStartsWith = 0;
		$('#recipeCarousel .carousel-item').each(function(){
			console.log('it starts with : ', itStartsWith);
			itStartsWith++;
			let minPerSlide = theNumber;
			let next = $(this).next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}
			next.children(':first-child').clone().appendTo($(this));

			for (let i = 0; i < minPerSlide; i++){
				console.log('index : ' , i);
				next = next.next();
				if(!next.length){
					next = $(this).siblings(':first');
				}
				next.children(':first-child').clone().appendTo($(this));
			}
		});
	}
}

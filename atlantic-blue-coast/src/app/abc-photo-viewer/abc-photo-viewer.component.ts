import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'abc-photo-viewer',
	templateUrl: './abc-photo-viewer.component.html',
	styleUrls: ['./abc-photo-viewer.component.css']
})
export class AbcPhotoViewerComponent implements OnInit {

	@Input() carouselPhotos;

	constructor() { }

	ngOnInit() {
		$('.photoNavWrapper').width($('.carousel-inner').width());
		$('#photoNavContainer').width(this.carouselPhotos.length * 68);
		$(window).on('resize',function(){
			$('.photoNavWrapper').width($('.carousel-inner').width());
		});
		(<any>$('#photoViewerCarouselControls')).carousel({interval: 5000});
	}
}

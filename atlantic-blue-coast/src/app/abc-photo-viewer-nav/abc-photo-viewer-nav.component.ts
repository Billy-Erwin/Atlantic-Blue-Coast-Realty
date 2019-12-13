import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'abc-photo-viewer-nav',
	templateUrl: './abc-photo-viewer-nav.component.html',
	styleUrls: ['./abc-photo-viewer-nav.component.css']
})
export class AbcPhotoViewerNavComponent implements OnInit {

	@Input() carouselPhotos;
	constructor() { }

	ngOnInit() {
		$('.photoNavWrapper').width($('.carousel-inner').width());
		$('#photoNavContainer').width(this.carouselPhotos.length * 68);
		console.log('stuff : ', this.carouselPhotos.length * 68);
		$(window).on('resize', function () {
			$('.photoNavWrapper').width($('.carousel-inner').width());
		});
	}
}

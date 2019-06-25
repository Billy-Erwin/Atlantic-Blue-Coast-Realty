import {Component, Input, OnInit} from '@angular/core';
import $ from 'jquery';

@Component({
	selector: 'abc-photo-viewer',
	templateUrl: './abc-photo-viewer.component.html',
	styleUrls: ['./abc-photo-viewer.component.css']
})
export class AbcPhotoViewerComponent implements OnInit {

	@Input() listingPhotos;

	constructor() { }

	ngOnInit() {
		$('.photoNavWrapper').width($('.carousel-inner').width());
		$('#photoNavContainer').width(this.listingPhotos.length * 68);
		$(window).on('resize',function(){
			$('.photoNavWrapper').width($('.carousel-inner').width());
		});
	}
}

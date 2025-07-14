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
		(<any>$('#photoViewerCarouselControls')).carousel({interval: 5000});
	}
}

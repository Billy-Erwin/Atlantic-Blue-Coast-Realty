import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'abc-spillway-page',
	templateUrl: './abc-spillway-page.component.html',
	styleUrls: ['./abc-spillway-page.component.css']
})
export class AbcSpillwayPageComponent implements OnInit {

	spillwayPhotos: any[] = [];
	contactDetails: object = {
		messageHeader: 'Reserve The Spillway',
		messageBody: 'I would like to get reservation information about The Spillway.'
	}
	constructor() { }

	ngOnInit() {
		this.spillwayPhotos.push(
			{
				UriLarge: '../../assets/images/spillway/deck_view.jpg',
				UriThumb: '../../assets/images/spillway/deck_view.jpg',
				Primary: true
			});
		this.spillwayPhotos.push(
			{
				UriLarge: '../../assets/images/spillway/dragonFly.jpg',
				UriThumb: '../../assets/images/spillway/dragonFly.jpg'
			});
		this.spillwayPhotos.push(
			{
				UriLarge: '../../assets/images/spillway/ducks.jpg',
				UriThumb: '../../assets/images/spillway/ducks.jpg'
			});
		this.spillwayPhotos.push(
			{
				UriLarge: '../../assets/images/spillway/fence.jpg',
				UriThumb: '../../assets/images/spillway/fence.jpg'
			});
		this.spillwayPhotos.push(
			{
				UriLarge: '../../assets/images/spillway/overlooking_water.jpg',
				UriThumb: '../../assets/images/spillway/overlooking_water.jpg'
			});
		this.spillwayPhotos.push(
			{
				UriLarge: '../../assets/images/spillway/stage.jpg',
				UriThumb: '../../assets/images/spillway/stage.jpg'
			});
	}

}

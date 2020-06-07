import { Component, OnInit } from '@angular/core';
import { AbcPhotosService } from '../abc-photos.service';

@Component({
	selector: 'abc-spillway-page',
	templateUrl: './abc-spillway-page.component.html',
	styleUrls: ['./abc-spillway-page.component.css']
})
export class AbcSpillwayPageComponent implements OnInit {

	spillwayPhotos: any[] = [];
	contactDetails: object = {
		messageHeader: 'Request More Information',
		messageBody: 'I would like to get reservation information about The Spillway.'
	}

	addressInfo: object = {
		name: 'The Spillway Event Venue',
		streetAddress: '1252 Mill Pond Rd',
		cityStateZip: 'Whiteville NC 28472'
	};

	generalInfo: string = 'The Spillway is an indoor/outdoor event venue in Whiteville NC.';

	rateInfo: object = {
		title: 'Rate Information',
		weekDays: 'Monday - Thursday: $250',
		weekends: 'Friday - Saturday: $450',
		sunday: 'Sunday: $300',
		holidays: '*holiday rates may vary',
		special: 'Contact Eric D Hill at (910) 625-8199 to discuss multi-day and business event pricing.'
	};

	requirementInfo: object = {
		requirements: 'Requirements to secure your reservation:',
		form1: 'completed',
		form2: 'Reservation Request Form', //link this
		deposit: 'refundable $100.00 deposit',
		holdTheDate: 'we do not take hold the date requests',
		exceptions: 'NO EXCEPTIONS'
	};

	constructor(private photosService: AbcPhotosService) { }

	ngOnInit() {
		const slideShowPhotoDirectory = '../../assets/images/spillway/spillway-slideshow/';

		this.photosService.getPhotosByDirectory('spillway/spillway-slideshow').subscribe(data => {
			for (let i = 0; i < data.length; i++) {
				this.spillwayPhotos.push(
					{
						UriLarge: `${slideShowPhotoDirectory}${data[i]}`,
						UriThumb: `${slideShowPhotoDirectory}${data[i]}`,
						Primary: (i == 0 ? true : false)
					}
				);
			}
		});
	}

}

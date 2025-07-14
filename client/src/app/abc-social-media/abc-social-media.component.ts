import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'abc-social-media',
	templateUrl: './abc-social-media.component.html',
	styleUrls: ['./abc-social-media.component.css']
})
export class AbcSocialMediaComponent implements OnInit {
	@Input() socialMediaData;
	constructor() { }

	ngOnInit() {
	}

}


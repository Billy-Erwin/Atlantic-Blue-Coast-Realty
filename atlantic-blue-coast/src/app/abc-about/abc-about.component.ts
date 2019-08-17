import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
	selector: 'abc-about',
	templateUrl: './abc-about.component.html',
	styleUrls: ['./abc-about.component.css']
})
export class AbcAboutComponent implements OnInit {


	constructor() { }

	ngOnInit() {
		$('#yoyoyo').click(data =>{
			console.log('hi there');
		});
		($('#yoyoyo') as any).popover(data =>{
			console.log('hi there');
		});
	}

}

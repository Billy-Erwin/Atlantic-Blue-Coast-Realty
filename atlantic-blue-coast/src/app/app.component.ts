import { Component } from '@angular/core';
import {StandardFieldService} from "./standard-field.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Atlantic Blue Coast Realty';

	constructor(private standardFieldService: StandardFieldService){
		standardFieldService.init();
	}
}

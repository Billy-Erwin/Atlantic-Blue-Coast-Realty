import { Component } from '@angular/core';
import {StandardFieldService} from "./standard-field.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Atlantic Blue Coast Realty';

	constructor(
		public standardFieldService: StandardFieldService){
	}

	ngOnInit(){
		this.standardFieldService.setStandardFields().subscribe(data =>{});;
	}
}

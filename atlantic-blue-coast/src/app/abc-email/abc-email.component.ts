import { Component } from '@angular/core';
import { AbcEmailForm } from "../abc-email-form";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
	selector: 'abc-email',
	templateUrl: './abc-email.component.html',
	styleUrls: ['./abc-email.component.css']
})

export class AbcEmailComponent {

	model = new AbcEmailForm();

	constructor(private http: HttpClient) { }

	submit() {
		console.log('model : ', this.model);
		this.sendMail().subscribe(data =>{
			console.log('data : ', data);
			// let some = JSON.parse(data.model);
			// console.log('some : ', some);
		});
	}

	sendMail(): Observable<any> {
		let emailUrl = `http://localhost:4040/sendMail?model=${JSON.stringify(this.model)}`;
		return this.http.get(emailUrl).pipe(map(res => {
			return res;
		}));
	}

}

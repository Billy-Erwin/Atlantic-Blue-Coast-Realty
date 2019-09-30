import { Component } from '@angular/core';
import { AbcEmailForm } from "../abc-email-form";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {NgForm} from "@angular/forms";

@Component({
	selector: 'abc-email',
	templateUrl: './abc-email.component.html',
	styleUrls: ['./abc-email.component.css']
})

export class AbcEmailComponent {

	model = new AbcEmailForm();
	submitted = false;
	messageHeader = 'Contact Us';
	submitButtonText = 'Send';

	constructor(private http: HttpClient) { }

	submit(abcForm: NgForm) {
		this.sendMail().subscribe(data =>{
			if(data.status === 'success'){
				abcForm.reset();
				this.submitted = true;
				this.messageHeader = 'Email sent!';
			} else {
				this.submitted = true;
				this.messageHeader = `Sorry, something went wrong...\n${data.error}`
			}
		});
	}

	sendMail(): Observable<any> {
		let emailUrl = `http://localhost:4040/sendMail?model=${JSON.stringify(this.model)}`;
		return this.http.get(emailUrl).pipe(map(res => {
			return res;
		}));
	}

}

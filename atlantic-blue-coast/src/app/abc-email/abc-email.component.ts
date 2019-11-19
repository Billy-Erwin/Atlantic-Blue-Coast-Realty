import { Component, Input, OnInit } from '@angular/core';
import { AbcEmailForm } from "../abc-email-form";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { NgForm } from "@angular/forms";
import {ListingsService} from "../listings.service";

@Component({
	selector: 'abc-email',
	templateUrl: './abc-email.component.html',
	styleUrls: ['./abc-email.component.css']
})

export class AbcEmailComponent implements OnInit {

	@Input() contactDetails: any;
	model = new AbcEmailForm();
	submitted = false;
	messageHeader = 'Contact Us';
	submitButtonText = 'Send';

	constructor(private http: HttpClient, private listingsService: ListingsService) { }

	ngOnInit(){
		if(this.contactDetails){
			this.messageHeader = this.contactDetails.messageHeader;
			this.model.message = this.contactDetails.messageBody;
		}
	}

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
		let emailUrl = `${this.listingsService.baseUrl}sendMail?model=${encodeURIComponent(JSON.stringify(this.model))}`;
		return this.http.get(emailUrl).pipe(map(res => {
			return res;
		}));
	}

}

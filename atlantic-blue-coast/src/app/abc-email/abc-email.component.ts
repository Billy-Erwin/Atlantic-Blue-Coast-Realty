import { Component, OnInit } from '@angular/core';
import { AbcEmailForm } from "../abc-email-form";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {Listing} from "../Listing";
import {ListingsService} from "../listings.service";

@Component({
  selector: 'abc-email',
  templateUrl: './abc-email.component.html',
  styleUrls: ['./abc-email.component.css']
})
export class AbcEmailComponent implements OnInit {

  model = new AbcEmailForm();

  constructor(private http: HttpClient, private listingsService: ListingsService) { }

  ngOnInit() {
  }

  submit() {
    this.listingsService.doSomething('1234').subscribe(data =>{
      console.log('data');
    });
    // console.log('submitting form', this.model);
    // let emailUrl = `http://localhost:4040/sendEmail`;
    // let resp =  this.http.get(emailUrl).pipe(map(data => {
    //   console.log('resp : ', data);
    // }));
  }

}

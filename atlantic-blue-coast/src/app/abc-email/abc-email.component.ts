import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abc-email',
  templateUrl: './abc-email.component.html',
  styleUrls: ['./abc-email.component.css']
})
export class AbcEmailComponent implements OnInit {

  model = {
    email: '',
    phoneNumber: '',
    fullName: '',
    emailMessage: ''
  };

  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log('submitting form');
  }

}

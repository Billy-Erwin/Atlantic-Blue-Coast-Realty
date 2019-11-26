import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abc-banner',
  templateUrl: './abc-banner.component.html',
  styleUrls: ['./abc-banner.component.css']
})
export class AbcBannerComponent implements OnInit {
  welcomeMessage = `Welcome to Atlantic Blue Coast Realty!`;
  sloganMessage = `Real Estate... easy as A B C`;
  constructor() { }

  ngOnInit() {
  }

}

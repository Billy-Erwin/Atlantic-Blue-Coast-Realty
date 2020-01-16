import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abc-banner',
  templateUrl: './abc-banner.component.html',
  styleUrls: ['./abc-banner.component.css']
})
export class AbcBannerComponent implements OnInit {
  welcomeMessage1 = `Welcome to`;
  welcomeMessage2 = `Atlantic Blue Coast Realty`;
  sloganMessage = `Real Estate... easy as A B C`;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abc-banner',
  templateUrl: './abc-banner.component.html',
  styleUrls: ['./abc-banner.component.css']
})
export class AbcBannerComponent implements OnInit {
  bannerMessage1 = `Real Estate...`;
  bannerMessage2 = `as easy as A B C`;
  constructor() { }

  ngOnInit() {
  }

}

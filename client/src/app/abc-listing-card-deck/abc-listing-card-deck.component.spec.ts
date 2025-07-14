import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcListingCardDeckComponent } from './abc-listing-card-deck.component';

describe('AbcListingCardDeckComponent', () => {
  let component: AbcListingCardDeckComponent;
  let fixture: ComponentFixture<AbcListingCardDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcListingCardDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcListingCardDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

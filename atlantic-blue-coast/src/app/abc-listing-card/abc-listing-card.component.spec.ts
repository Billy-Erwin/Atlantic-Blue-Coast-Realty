import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcListingCardComponent } from './abc-listing-card.component';

describe('AbcListingCardComponent', () => {
  let component: AbcListingCardComponent;
  let fixture: ComponentFixture<AbcListingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcListingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcListingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

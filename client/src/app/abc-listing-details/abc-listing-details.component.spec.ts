import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcListingDetailsComponent } from './abc-listing-details.component';

describe('AbcListingDetailsComponent', () => {
  let component: AbcListingDetailsComponent;
  let fixture: ComponentFixture<AbcListingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcListingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcListingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

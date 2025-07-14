import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcSelectedListingComponent } from './abc-selected-listing.component';

describe('AbcSelectedListingComponent', () => {
  let component: AbcSelectedListingComponent;
  let fixture: ComponentFixture<AbcSelectedListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcSelectedListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcSelectedListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

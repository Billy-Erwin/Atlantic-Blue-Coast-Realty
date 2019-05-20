import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcFeaturedListingsComponent } from './abc-featured-listings.component';

describe('AbcFeaturedListingsComponent', () => {
  let component: AbcFeaturedListingsComponent;
  let fixture: ComponentFixture<AbcFeaturedListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcFeaturedListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcFeaturedListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcFeaturedListingsPageComponent } from './abc-featured-listings-page.component';

describe('AbcFeaturedListingsPageComponent', () => {
  let component: AbcFeaturedListingsPageComponent;
  let fixture: ComponentFixture<AbcFeaturedListingsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcFeaturedListingsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcFeaturedListingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

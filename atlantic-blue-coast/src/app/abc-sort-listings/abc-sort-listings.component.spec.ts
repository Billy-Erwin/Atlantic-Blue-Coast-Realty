import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcSortListingsComponent } from './abc-sort-listings.component';

describe('AbcSortListingsComponent', () => {
  let component: AbcSortListingsComponent;
  let fixture: ComponentFixture<AbcSortListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcSortListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcSortListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

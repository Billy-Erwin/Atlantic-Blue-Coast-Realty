import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcListingsPageComponent } from './abc-listings-page.component';

describe('AbcListingsPageComponent', () => {
  let component: AbcListingsPageComponent;
  let fixture: ComponentFixture<AbcListingsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcListingsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcListingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

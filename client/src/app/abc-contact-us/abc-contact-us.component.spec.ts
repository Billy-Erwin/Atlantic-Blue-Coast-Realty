import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcContactUsComponent } from './abc-contact-us.component';

describe('AbcContactUsComponent', () => {
  let component: AbcContactUsComponent;
  let fixture: ComponentFixture<AbcContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

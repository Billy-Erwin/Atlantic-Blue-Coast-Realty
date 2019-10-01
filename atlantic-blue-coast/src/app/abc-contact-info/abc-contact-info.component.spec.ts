import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcContactInfoComponent } from './abc-contact-info.component';

describe('AbcContactInfoComponent', () => {
  let component: AbcContactInfoComponent;
  let fixture: ComponentFixture<AbcContactInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcContactInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcLegalComponent } from './abc-legal.component';

describe('AbcLegalComponent', () => {
  let component: AbcLegalComponent;
  let fixture: ComponentFixture<AbcLegalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcLegalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

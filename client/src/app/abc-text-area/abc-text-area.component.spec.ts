import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcTextAreaComponent } from './abc-text-area.component';

describe('AbcTextAreaComponent', () => {
  let component: AbcTextAreaComponent;
  let fixture: ComponentFixture<AbcTextAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcTextAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

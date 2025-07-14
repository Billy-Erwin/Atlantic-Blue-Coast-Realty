import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcHeaderComponent } from './abc-header.component';

describe('AbcHeaderComponent', () => {
  let component: AbcHeaderComponent;
  let fixture: ComponentFixture<AbcHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

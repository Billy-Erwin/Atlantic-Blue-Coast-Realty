import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcLargeRowComponent } from './abc-large-row.component';

describe('AbcLargeRowComponent', () => {
  let component: AbcLargeRowComponent;
  let fixture: ComponentFixture<AbcLargeRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcLargeRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcLargeRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

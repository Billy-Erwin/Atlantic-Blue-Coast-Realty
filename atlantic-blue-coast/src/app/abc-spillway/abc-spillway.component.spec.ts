import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcSpillwayComponent } from './abc-spillway.component';

describe('AbcSpillwayComponent', () => {
  let component: AbcSpillwayComponent;
  let fixture: ComponentFixture<AbcSpillwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcSpillwayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcSpillwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

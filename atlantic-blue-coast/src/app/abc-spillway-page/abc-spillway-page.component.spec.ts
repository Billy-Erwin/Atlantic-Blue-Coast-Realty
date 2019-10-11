import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcSpillwayPageComponent } from './abc-spillway-page.component';

describe('AbcSpillwayPageComponent', () => {
  let component: AbcSpillwayPageComponent;
  let fixture: ComponentFixture<AbcSpillwayPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcSpillwayPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcSpillwayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcUnderConstructionComponent } from './abc-under-construction.component';

describe('AbcUnderConstructionComponent', () => {
  let component: AbcUnderConstructionComponent;
  let fixture: ComponentFixture<AbcUnderConstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcUnderConstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcUnderConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

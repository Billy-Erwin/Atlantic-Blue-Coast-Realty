import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcSimpleSearchComponent } from './abc-simple-search.component';

describe('AbcSimpleSearchComponent', () => {
  let component: AbcSimpleSearchComponent;
  let fixture: ComponentFixture<AbcSimpleSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcSimpleSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcSimpleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

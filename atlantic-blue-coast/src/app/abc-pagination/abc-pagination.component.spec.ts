import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcPaginationComponent } from './abc-pagination.component';

describe('AbcPaginationComponent', () => {
  let component: AbcPaginationComponent;
  let fixture: ComponentFixture<AbcPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

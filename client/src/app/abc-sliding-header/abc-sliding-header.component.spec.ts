import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcSlidingHeaderComponent } from './abc-sliding-header.component';

describe('SlidingHeaderComponent', () => {
  let component: AbcSlidingHeaderComponent;
  let fixture: ComponentFixture<AbcSlidingHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcSlidingHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcSlidingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

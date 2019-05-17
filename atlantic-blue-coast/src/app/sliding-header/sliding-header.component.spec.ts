import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingHeaderComponent } from './sliding-header.component';

describe('SlidingHeaderComponent', () => {
  let component: SlidingHeaderComponent;
  let fixture: ComponentFixture<SlidingHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidingHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

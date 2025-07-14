import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcHomePageComponent } from './abc-home-page.component';

describe('AbcHomePageComponent', () => {
  let component: AbcHomePageComponent;
  let fixture: ComponentFixture<AbcHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

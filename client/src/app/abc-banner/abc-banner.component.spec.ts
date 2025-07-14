import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcBannerComponent } from './abc-banner.component';

describe('AbcBannerComponent', () => {
  let component: AbcBannerComponent;
  let fixture: ComponentFixture<AbcBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

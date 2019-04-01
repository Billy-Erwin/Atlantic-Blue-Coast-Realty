import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcSocialMediaWrapperComponent } from './abc-social-media-wrapper.component';

describe('AbcSocialMedialWrapperComponent', () => {
  let component: AbcSocialMediaWrapperComponent;
  let fixture: ComponentFixture<AbcSocialMediaWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcSocialMediaWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcSocialMediaWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

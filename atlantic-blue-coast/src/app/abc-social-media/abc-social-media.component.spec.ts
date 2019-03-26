import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcSocialMediaComponent } from './abc-social-media.component';

describe('AbcSocialMediaComponent', () => {
  let component: AbcSocialMediaComponent;
  let fixture: ComponentFixture<AbcSocialMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcSocialMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

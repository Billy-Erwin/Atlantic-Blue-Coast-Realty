import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcCommunityComponent } from './abc-community.component';

describe('AbcCommunityComponent', () => {
  let component: AbcCommunityComponent;
  let fixture: ComponentFixture<AbcCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

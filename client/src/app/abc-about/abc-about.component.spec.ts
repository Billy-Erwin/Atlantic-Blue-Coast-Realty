import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcAboutComponent } from './abc-about.component';

describe('AbcAboutComponent', () => {
  let component: AbcAboutComponent;
  let fixture: ComponentFixture<AbcAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcDetailSectionComponent } from './abc-detail-section.component';

describe('AbcDetailSectionComponent', () => {
  let component: AbcDetailSectionComponent;
  let fixture: ComponentFixture<AbcDetailSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcDetailSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcDetailSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

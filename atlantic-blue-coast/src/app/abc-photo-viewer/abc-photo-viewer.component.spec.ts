import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcPhotoViewerComponent } from './abc-photo-viewer.component';

describe('AbcPhotoViewerComponent', () => {
  let component: AbcPhotoViewerComponent;
  let fixture: ComponentFixture<AbcPhotoViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcPhotoViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcPhotoViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

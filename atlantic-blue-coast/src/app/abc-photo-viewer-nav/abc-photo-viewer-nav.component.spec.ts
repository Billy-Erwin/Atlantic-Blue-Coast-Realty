import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcPhotoViewerNavComponent } from './abc-photo-viewer-nav.component';

describe('AbcPhotoViewerNavComponent', () => {
  let component: AbcPhotoViewerNavComponent;
  let fixture: ComponentFixture<AbcPhotoViewerNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcPhotoViewerNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcPhotoViewerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

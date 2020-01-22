import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcDocumentDropdownComponent } from './abc-document-dropdown.component';

describe('AbcDocumentDropdownComponent', () => {
  let component: AbcDocumentDropdownComponent;
  let fixture: ComponentFixture<AbcDocumentDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcDocumentDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcDocumentDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcSearchPropertiesComponent } from './abc-search-properties.component';

describe('AbcSearchPropertiesComponent', () => {
  let component: AbcSearchPropertiesComponent;
  let fixture: ComponentFixture<AbcSearchPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcSearchPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcSearchPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

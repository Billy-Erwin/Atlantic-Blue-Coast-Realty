import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcFooterComponent } from './abc-footer.component';

describe('AbcFooterComponent', () => {
  let component: AbcFooterComponent;
  let fixture: ComponentFixture<AbcFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

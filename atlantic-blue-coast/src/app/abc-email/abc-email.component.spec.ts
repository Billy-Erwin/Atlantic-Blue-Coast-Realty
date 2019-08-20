import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcEmailComponent } from './abc-email.component';

describe('AbcEmailComponent', () => {
  let component: AbcEmailComponent;
  let fixture: ComponentFixture<AbcEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

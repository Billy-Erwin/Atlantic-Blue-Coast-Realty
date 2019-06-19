import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcCarouselCardDeckComponent } from './abc-carousel-card-deck.component';

describe('AbcCarouselCardDeckComponent', () => {
  let component: AbcCarouselCardDeckComponent;
  let fixture: ComponentFixture<AbcCarouselCardDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcCarouselCardDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcCarouselCardDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

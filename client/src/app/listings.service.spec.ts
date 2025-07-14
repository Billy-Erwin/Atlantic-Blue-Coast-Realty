import { TestBed } from '@angular/core/testing';

import { ListingsService } from './listings.service';

describe('FeaturedListingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListingsService = TestBed.get(ListingsService);
    expect(service).toBeTruthy();
  });
});

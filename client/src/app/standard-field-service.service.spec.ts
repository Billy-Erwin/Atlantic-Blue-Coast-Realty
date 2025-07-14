import { TestBed } from '@angular/core/testing';

import { StandardFieldService } from './standard-field.service';

describe('StandardFieldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StandardFieldService = TestBed.get(StandardFieldService);
    expect(service).toBeTruthy();
  });
});

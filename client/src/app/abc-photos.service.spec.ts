import { TestBed } from '@angular/core/testing';

import { AbcPhotosService } from './abc-photos.service';

describe('AbcPhotoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbcPhotosService = TestBed.get(AbcPhotosService);
    expect(service).toBeTruthy();
  });
});

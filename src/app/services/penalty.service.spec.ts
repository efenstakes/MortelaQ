import { TestBed } from '@angular/core/testing';

import { PenaltyService } from './penalty.service';

describe('PenaltyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PenaltyService = TestBed.get(PenaltyService);
    expect(service).toBeTruthy();
  });
});

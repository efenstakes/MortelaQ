import { TestBed } from '@angular/core/testing';

import { UserFixService } from './user-fix.service';

describe('UserFixService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserFixService = TestBed.get(UserFixService);
    expect(service).toBeTruthy();
  });
});

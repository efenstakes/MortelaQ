import { TestBed, async, inject } from '@angular/core/testing';

import { CashierGuard } from './cashier.guard';

describe('CashierGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CashierGuard]
    });
  });

  it('should ...', inject([CashierGuard], (guard: CashierGuard) => {
    expect(guard).toBeTruthy();
  }));
});

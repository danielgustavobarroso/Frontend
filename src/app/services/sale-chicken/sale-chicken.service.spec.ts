import { TestBed } from '@angular/core/testing';

import { SaleChickenService } from './sale-chicken.service';

describe('SaleChickenService', () => {
  let service: SaleChickenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaleChickenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

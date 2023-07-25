import { TestBed } from '@angular/core/testing';

import { PurchaseChickenService } from './purchase-chicken.service';

describe('PurchaseChickenService', () => {
  let service: PurchaseChickenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseChickenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

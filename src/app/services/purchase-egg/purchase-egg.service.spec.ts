import { TestBed } from '@angular/core/testing';

import { PurchaseEggService } from './purchase-egg.service';

describe('PurchaseEggService', () => {
  let service: PurchaseEggService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseEggService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

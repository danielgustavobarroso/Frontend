import { TestBed } from '@angular/core/testing';

import { SaleEggService } from './sale-egg.service';

describe('SaleEggService', () => {
  let service: SaleEggService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaleEggService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SimulatorDateService } from './simulator-date.service';

describe('SimulatorDateService', () => {
  let service: SimulatorDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimulatorDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

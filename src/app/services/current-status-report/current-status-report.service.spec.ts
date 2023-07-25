import { TestBed } from '@angular/core/testing';

import { CurrentStatusReportService } from './current-status-report.service';

describe('CurrentStatusReportService', () => {
  let service: CurrentStatusReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentStatusReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

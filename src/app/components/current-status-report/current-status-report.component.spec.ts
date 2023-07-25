import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCurrentStatusComponent } from './current-status-report.component';

describe('ReportCurrentStatusComponent', () => {
  let component: ReportCurrentStatusComponent;
  let fixture: ComponentFixture<ReportCurrentStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportCurrentStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportCurrentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

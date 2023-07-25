import { Component } from '@angular/core';
import { CurrentStatusReportService } from '../../services/current-status-report/current-status-report.service';
import { Router } from '@angular/router';
import { CurrentStatusReport } from '../../entities/current-status-report';

@Component({
  selector: 'app-current-status-report',
  templateUrl: './current-status-report.component.html',
  styleUrls: ['./current-status-report.component.css']
})
export class CurrentStatusReportComponent {

  report:CurrentStatusReport;
  errorMessage:string;
  loading:boolean;
  farmId:string;

  constructor(private currentStatusReportService: CurrentStatusReportService, private router:Router) {
    this.report = {
      farmId: '',
      farmName: '',
      farmMoney: 0,
      chickenLimit: 0,
      eggLimit: 0,
      eggsCount: 0,
      chickensCount: 0
    };
    this.errorMessage = '';
    this.loading = true;
    //se asigna 1 porque va a utilizar una unica granja con ese id
    this.farmId = '1';
  }

  ngOnInit() {
    this.getCurrentStatusReport();
  }

  reload() {
    this.report = {
      farmId: '',
      farmName: '',
      farmMoney: 0,
      chickenLimit: 0,
      eggLimit: 0,
      eggsCount: 0,
      chickensCount: 0
    };
    this.errorMessage = '';
    this.loading = true;
    this.getCurrentStatusReport();
  }

  getCurrentStatusReport() {
    this.currentStatusReportService.getCurrentStatusReport(this.farmId).subscribe({
      next: (resp) => {
        this.report = resp;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.loading = false;
      }
    });
  }

}

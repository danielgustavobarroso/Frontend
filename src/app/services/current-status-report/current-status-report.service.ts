import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentStatusReport } from '../../entities/current-status-report';

@Injectable({
  providedIn: 'root'
})
export class CurrentStatusReportService {

  private url = 'http://localhost:8011/ms-report/api/v1/reports/currentStatusReport';

  constructor(private httpClient: HttpClient) { }

  getCurrentStatusReport(id:string) {
    return this.httpClient.get<CurrentStatusReport>(this.url + "/" + id);
  }

}

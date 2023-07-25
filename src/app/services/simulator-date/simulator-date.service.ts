import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SimulatorDateService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:8011/ms-simulator-date/api/v1';
  }

  getDate() {
    return this.httpClient.get(this.url+'/get-date', {responseType: 'text'});
  }

  setDate(days: String) {
    return this.httpClient.post(this.url+'/set-date', days, {responseType: 'text'});
  }

}

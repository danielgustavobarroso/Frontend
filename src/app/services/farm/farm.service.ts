import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Farm } from '../../entities/farm';

@Injectable({
  providedIn: 'root'
})

export class FarmService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:8011/ms-farm/api/v1/farms';
  }

  getFarms() {
    return this.httpClient.get<Farm[]>(this.url);
  }

  loadFarm() {
    return this.httpClient.post(this.url + '/load', null);
  }

}

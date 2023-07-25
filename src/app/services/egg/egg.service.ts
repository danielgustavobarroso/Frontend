import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Egg } from '../../entities/egg';

@Injectable({
  providedIn: 'root'
})

export class EggService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:8011/ms-egg/api/v1/eggs';
  }

  getEggs() {
    return this.httpClient.get<Egg[]>(this.url);
  }

  deleteEgg(id:string) {
    return this.httpClient.delete<Egg>(this.url + "/" + id);
  }

  createEgg(egg:Egg){
    return this.httpClient.post<Egg>(this.url,egg);
  }

}

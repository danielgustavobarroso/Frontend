import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chicken } from '../../entities/chicken';

@Injectable({
  providedIn: 'root'
})
export class ChickenService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:8011/ms-chicken/api/v1/chickens';
  }

  getChickens() {
    return this.httpClient.get<Chicken[]>(this.url);
  }

  deleteChicken(id:string) {
    return this.httpClient.delete<Chicken>(this.url + "/" + id);
  }

  createChicken(chicken:Chicken){
    return this.httpClient.post<Chicken>(this.url,chicken);
  }

}

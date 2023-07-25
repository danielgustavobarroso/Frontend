import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SaleChicken } from '../../entities/sale-chicken';

@Injectable({
  providedIn: 'root'
})
export class SaleChickenService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:8011/ms-pursalchicken/api/v1/sale-chicken';
  }

  getSaleChickens() {
    return this.httpClient.get<SaleChicken[]>(this.url);
  }

  createSaleChickens(saleChickens:SaleChicken) {
    return this.httpClient.post<SaleChicken>(this.url, saleChickens);
  }

}

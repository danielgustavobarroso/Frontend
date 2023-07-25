import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SaleEgg } from '../../entities/sale-egg';

@Injectable({
  providedIn: 'root'
})
export class SaleEggService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:8011/ms-pursalegg/api/v1/sale-egg';
  }

  getSaleEggs() {
    return this.httpClient.get<SaleEgg[]>(this.url);
  }

  createSaleEgg(saleEgg:SaleEgg) {
    return this.httpClient.post<SaleEgg>(this.url, saleEgg);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PurchaseChicken } from '../../entities/purchase-chicken';

@Injectable({
  providedIn: 'root'
})
export class PurchaseChickenService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:8011/ms-pursalchicken/api/v1/purchase-chicken';
  }

  getPurchaseChickens() {
    return this.httpClient.get<PurchaseChicken[]>(this.url);
  }

  createPurchaseChicken(purchaseChicken:PurchaseChicken) {
    return this.httpClient.post<PurchaseChicken>(this.url, purchaseChicken);
  }

}

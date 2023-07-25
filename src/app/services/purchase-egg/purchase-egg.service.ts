import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PurchaseEgg } from '../../entities/purchase-egg';

@Injectable({
  providedIn: 'root'
})
export class PurchaseEggService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:8011/ms-pursalegg/api/v1/purchase-egg';
  }

  getPurchaseEggs() {
    return this.httpClient.get<PurchaseEgg[]>(this.url);
  }

  createPurchaseEgg(purchaseEgg:PurchaseEgg) {
    return this.httpClient.post<PurchaseEgg>(this.url, purchaseEgg);
  }

}

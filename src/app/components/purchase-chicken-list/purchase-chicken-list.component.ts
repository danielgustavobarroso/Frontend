import { Component } from '@angular/core';
import { PurchaseChickenService } from '../../services/purchase-chicken/purchase-chicken.service';
import { PurchaseChicken } from '../../entities/purchase-chicken';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-chicken-list',
  templateUrl: './purchase-chicken-list.component.html',
  styleUrls: ['./purchase-chicken-list.component.css']
})
export class PurchaseChickenListComponent {

  purchaseChickens:PurchaseChicken[];
  errorMessage:string;
  loading:boolean;

  constructor(private purchaseChickenService: PurchaseChickenService, private router:Router) {
    this.purchaseChickens = [];
    this.errorMessage = '';
    this.loading = true;
  }

  ngOnInit() {
    this.getPurchaseChickens();
  }

  reload() {
    this.purchaseChickens = [];
    this.errorMessage = '';
    this.loading = true;
    this.getPurchaseChickens();
  }

  getPurchaseChickens(){
    this.purchaseChickenService.getPurchaseChickens().subscribe({
      next: (resp) => {
        this.purchaseChickens = resp;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.loading = false;
      }
    });
  }

  addPurchase(){
    this.router.navigate(['purchaseChickenAdd']);
  }

}

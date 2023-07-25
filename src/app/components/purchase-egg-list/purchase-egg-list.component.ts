import { Component } from '@angular/core';
import { PurchaseEggService } from '../../services/purchase-egg/purchase-egg.service';
import { PurchaseEgg } from '../../entities/purchase-egg';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-egg-list',
  templateUrl: './purchase-egg-list.component.html',
  styleUrls: ['./purchase-egg-list.component.css']
})
export class PurchaseEggListComponent {

  purchaseEggs:PurchaseEgg[];
  errorMessage:string;
  loading:boolean;

  constructor(private purchaseEggService: PurchaseEggService, private router:Router) {
    this.purchaseEggs = [];
    this.errorMessage = '';
    this.loading = true;
  }

  ngOnInit() {
    this.getPurchaseEggs();
  }

  reload() {
    this.purchaseEggs = [];
    this.errorMessage = '';
    this.loading = true;
    this.getPurchaseEggs();
  }

  getPurchaseEggs(){
    this.purchaseEggService.getPurchaseEggs().subscribe({
      next: (resp) => {
        this.purchaseEggs = resp;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.loading = false;
      }
    });
  }

  addPurchase(){
    this.router.navigate(['purchaseEggAdd']);
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseEggService } from '../../services/purchase-egg/purchase-egg.service';
import { PurchaseEgg } from '../../entities/purchase-egg';
import { Farm } from '../../entities/farm';
import { FarmService } from 'src/app/services/farm/farm.service';
import { Egg } from '../../entities/egg';
import { EggService } from 'src/app/services/egg/egg.service';

@Component({
  selector: 'app-purchase-egg-add',
  templateUrl: './purchase-egg-add.component.html',
  styleUrls: ['./purchase-egg-add.component.css']
})
export class PurchaseEggAddComponent {

  purchaseEgg:PurchaseEgg;
  errorMessage:string;
  farms:Farm[];
  eggs:Egg[];
  moneyAvailable: number;
  eggLimit: number;
  unitsAvailable: number;

  constructor(private router:Router, private service:PurchaseEggService, private farmService:FarmService, private eggService:EggService) {
    this.purchaseEgg = {
      farmId: '1',
      purchaseDate: new Date,
      units: 1,
      price: 0,
      totalAmount: 0
    };
    this.errorMessage = '';
    this.farms = [];
    this.eggs = [];
    this.moneyAvailable = 0;
    this.unitsAvailable = 0;
    this.eggLimit = 0;
    this.getFarms();
  }

  getFarms() {
    this.farmService.getFarms().subscribe({
      next: (resp) => {
        this.farms = resp;
        this.moneyAvailable = this.farms[0].money;
        this.eggLimit = this.farms[0].eggLimit;
        this.getEggs();
      },
      error: (err) => {
        alert('Error en la petición:\n\n' + err.message);
      }
    });
  }

  getEggs() {
    this.eggService.getEggs().subscribe({
      next: (resp) => {
        this.eggs = resp.filter(e => e.state == 'A');
        this.unitsAvailable = this.eggs.length;
      },
      error: (err) => {
        alert('Error en la petición:\n\n' + err.message);
      }
    });
  }

  modifyTotalAmount(){
    this.purchaseEgg.totalAmount = this.purchaseEgg.units * this.purchaseEgg.price;
  }

  savePurchase(){
    if ((this.unitsAvailable + this.purchaseEgg.units) > this.eggLimit) {
      alert('La cantidad de huevos que se desean comprar supera el límite de la granja.');
      return;
    }

    if (this.purchaseEgg.totalAmount > this.moneyAvailable) {
      alert('La cantidad de dinero de la venta supera al monto disponible.');
      return;
    }

    this.service.createPurchaseEgg(this.purchaseEgg).subscribe({
      next: (resp:any) => {
        if (resp.status == 207) {
          alert(resp.message);
        } else {
          alert("Compra realizada!");
          this.goToPurchaseEggList();
        }
      },
      error: (err) => {
          alert('Error en la petición:\n\n' + err.message);
      }
    });
  }

  goToPurchaseEggList() {
    this.router.navigate(['purchaseEggList']);
  }

  cleanForm() {
    this.purchaseEgg.purchaseDate=new Date();
    this.purchaseEgg.units=1;
    this.purchaseEgg.price=0;
    this.purchaseEgg.totalAmount=0;
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseChickenService } from '../../services/purchase-chicken/purchase-chicken.service';
import { PurchaseChicken } from '../../entities/purchase-chicken';
import { Farm } from '../../entities/farm';
import { FarmService } from 'src/app/services/farm/farm.service';
import { Chicken } from '../../entities/chicken';
import { ChickenService } from 'src/app/services/chicken/chicken.service';

@Component({
  selector: 'app-purchase-chicken-add',
  templateUrl: './purchase-chicken-add.component.html',
  styleUrls: ['./purchase-chicken-add.component.css']
})

export class PurchaseChickenAddComponent {

  purchaseChicken:PurchaseChicken;
  errorMessage:string;
  farms:Farm[];
  chickens:Chicken[];
  moneyAvailable: number;
  chickenLimit: number;
  unitsAvailable: number;

  constructor(private router:Router, private service:PurchaseChickenService, private farmService:FarmService, private chickenService:ChickenService) {
    this.purchaseChicken = {
      farmId: '1',
      purchaseDate: new Date,
      units: 1,
      price: 0,
      totalAmount: 0
    };
    this.errorMessage = '';
    this.farms = [];
    this.chickens = [];
    this.moneyAvailable = 0;
    this.unitsAvailable = 0;
    this.chickenLimit = 0;
    this.getFarms();
  }

  getFarms() {
    this.farmService.getFarms().subscribe({
      next: (resp) => {
        this.farms = resp;
        this.moneyAvailable = this.farms[0].money;
        this.chickenLimit = this.farms[0].chickenLimit;
        this.getChickens();
      },
      error: (err) => {
        alert('Error en la petición:\n\n' + err.message);
      }
    });
  }

  getChickens() {
    this.chickenService.getChickens().subscribe({
      next: (resp) => {
        this.chickens = resp.filter(c => c.state == 'A');
        this.unitsAvailable = this.chickens.length;
      },
      error: (err) => {
        alert('Error en la petición:\n\n' + err.message);
      }
    });
  }

  modifyTotalAmount(){
    this.purchaseChicken.totalAmount = this.purchaseChicken.units * this.purchaseChicken.price;
  }

  savePurchase(){
    if ((this.unitsAvailable + this.purchaseChicken.units) > this.chickenLimit) {
      alert('La cantidad de gallinas que se desean comprar supera el límite de la granja.');
      return;
    }

    if (this.purchaseChicken.totalAmount > this.moneyAvailable) {
      alert('La cantidad de dinero de la venta supera al monto disponible.');
      return;
    }

    this.service.createPurchaseChicken(this.purchaseChicken).subscribe({
      next: (resp:any) => {
        if (resp.status == 207) {
          alert(resp.message);
        } else {
          alert("Compra realizada!");
          this.goToPurchaseChickenList();
        }
      },
      error: (err) => {
          alert('Error en la petición:\n\n' + err.message);
      }
    });

  }

  goToPurchaseChickenList() {
    this.router.navigate(['purchaseChickenList']);
  }

  cleanForm() {
    this.purchaseChicken.purchaseDate=new Date();
    this.purchaseChicken.units=1;
    this.purchaseChicken.price=0;
    this.purchaseChicken.totalAmount=0;
  }

}

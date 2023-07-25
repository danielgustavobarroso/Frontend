import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SaleEggService } from '../../services/sale-egg/sale-egg.service';
import { SaleEgg } from '../../entities/sale-egg';
import { Egg } from '../../entities/egg';
import { EggService } from 'src/app/services/egg/egg.service';

@Component({
  selector: 'app-sale-egg-add',
  templateUrl: './sale-egg-add.component.html',
  styleUrls: ['./sale-egg-add.component.css']
})

export class SaleEggAddComponent {

  saleEgg:SaleEgg;
  errorMessage:string;
  eggs:Egg[];
  unitsAvailable: number;

  constructor(private router:Router, private service:SaleEggService, private eggService:EggService) {
    this.saleEgg = {
      farmId: '1',
      saleDate: new Date(),
      units: 1,
      price: 0,
      totalAmount: 0
    };
    this.errorMessage = '';
    this.eggs = [];
    this.unitsAvailable = 0;
    this.getEggs();
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
    this.saleEgg.totalAmount = this.saleEgg.units * this.saleEgg.price;
  }

  saveSale(){
    if (this.saleEgg.units > this.unitsAvailable) {
      alert('La cantidad de huevos a vender no puede superar a la disponible.');
      return;
    } 

      this.service.createSaleEgg(this.saleEgg).subscribe({
        next: (resp:any) => {
          if (resp.status == 207) {
            alert(resp.message);
          } else {
            alert("Venta realizada!");
            this.goToSaleEggList();
          }
        },
        error: (err) => {
          alert('Error en la petición:\n\n' + err.message);
        }
      });
  }

  goToSaleEggList() {
   this.router.navigate(['saleEggList']);
  }

  cleanForm() {
    this.saleEgg.saleDate=new Date();
    this.saleEgg.units=1;
    this.saleEgg.price=0;
    this.saleEgg.totalAmount=0;
  }

}

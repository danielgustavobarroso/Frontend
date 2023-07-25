import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SaleChickenService } from '../../services/sale-chicken/sale-chicken.service';
import { SaleChicken } from '../../entities/sale-chicken';
import { Chicken } from '../../entities/chicken';
import { ChickenService } from 'src/app/services/chicken/chicken.service';

@Component({
  selector: 'app-sale-chicken-add',
  templateUrl: './sale-chicken-add.component.html',
  styleUrls: ['./sale-chicken-add.component.css']
})

export class SaleChickenAddComponent {

  saleChicken:SaleChicken;
  errorMessage:string;
  chickens:Chicken[];
  unitsAvailable: number;

  constructor(private router:Router, private service:SaleChickenService, private chickenService:ChickenService) {
    this.saleChicken = {
      farmId: '1',
      saleDate: new Date(),
      units: 1,
      price: 0,
      totalAmount: 0
    };
    this.errorMessage = '';
    this.chickens = [];
    this.unitsAvailable = 0;
    this.getChickens();
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
    this.saleChicken.totalAmount = this.saleChicken.units * this.saleChicken.price;
  }

  saveSale(){
    if (this.saleChicken.units > this.unitsAvailable) {
      alert('La cantidad de gallinas a vender no puede superar a la disponible.');
      return;
    }

      this.service.createSaleChickens(this.saleChicken).subscribe({
        next: (resp:any) => {
          if (resp.status == 207) {
            alert(resp.message);
          } else {
            alert("Venta realizada!");
            this.goToSaleChickenList();
          }
        },
        error: (err) => {
          alert('Error en la petición:\n\n' + err.message);
        }
      });
  }

  goToSaleChickenList() {
    this.router.navigate(['saleChickenList']);
  }

  cleanForm() {
    this.saleChicken.saleDate=new Date();
    this.saleChicken.units=1;
    this.saleChicken.price=0;
    this.saleChicken.totalAmount=0;
  }

}

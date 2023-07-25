import { Component } from '@angular/core';
import { SaleChickenService } from '../../services/sale-chicken/sale-chicken.service';
import { SaleChicken } from '../../entities/sale-chicken';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale-chicken-list',
  templateUrl: './sale-chicken-list.component.html',
  styleUrls: ['./sale-chicken-list.component.css']
})

export class SaleChickenListComponent {

  saleChickens:SaleChicken[];
  errorMessage:string;
  loading:boolean;

  constructor(private saleChickenService: SaleChickenService, private router:Router) {
    this.saleChickens = [];
    this.errorMessage = '';
    this.loading = true;
  }

  ngOnInit() {
    this.getSaleChickens();
  }

  getSaleChickens() {
    this.saleChickenService.getSaleChickens().subscribe({
      next: (response) => {
        this.saleChickens = response;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.loading = false;
      }
    });
  }

  reload() {
    this.saleChickens = [];
    this.errorMessage = '';
    this.loading = true;
    this.getSaleChickens();
  }

  addSale(){
    this.router.navigate(['saleChickenAdd']);
  }

}

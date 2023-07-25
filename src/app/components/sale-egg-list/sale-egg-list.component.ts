import { Component } from '@angular/core';
import { SaleEggService } from '../../services/sale-egg/sale-egg.service';
import { SaleEgg } from '../../entities/sale-egg';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale-egg-list',
  templateUrl: './sale-egg-list.component.html',
  styleUrls: ['./sale-egg-list.component.css']
})

export class SaleEggListComponent {

  saleEggs:SaleEgg[];
  errorMessage:string;
  loading:boolean;

  constructor(private saleEggService: SaleEggService, private router:Router) {
    this.saleEggs = [];
    this.errorMessage = '';
    this.loading = true;
  }

  ngOnInit() {
    this.getSaleEggs();
  }

  getSaleEggs() {
    this.saleEggService.getSaleEggs().subscribe({
      next: (resp) => {
        this.saleEggs = resp;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.loading = false;
      }
    });
  }

  reload() {
    this.saleEggs = [];
    this.errorMessage = '';
    this.loading = true;
    this.getSaleEggs();
  }

  addSale(){
    this.router.navigate(['saleEggAdd']);
  }

}

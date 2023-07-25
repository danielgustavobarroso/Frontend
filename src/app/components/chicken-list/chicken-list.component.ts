import { Component } from '@angular/core';
import { ChickenService } from '../../services/chicken/chicken.service';
import { Chicken } from '../../entities/chicken';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chicken-list',
  templateUrl: './chicken-list.component.html',
  styleUrls: ['./chicken-list.component.css']
})
export class ChickenListComponent {
  chickens:Chicken[];
  errorMessage:string;
  loading:boolean;
  chickenTotalCount: number;
  chickenAvailableCount: number;
  chickenDiscardedCount: number;
  chickenSoldCount: number;
  chickenDeadCount: number;
  states = new Map<String, String>([
    ['A','Disponible'],
    ['D','Descartada'],
    ['S','Vendida'],
    ['E','Muerta']
  ]);
  origins = new Map<String, String>([
    ['B','Compra'],
    ['G','Creció de huevo'],
    ['L','Carga inicial']
  ]);

  constructor(private chickenService: ChickenService, private router:Router) {
    this.chickens = [];
    this.errorMessage = '';
    this.loading = true;
    this.chickenTotalCount = 0;
    this.chickenAvailableCount = 0;
    this.chickenDiscardedCount = 0;
    this.chickenSoldCount = 0;
    this.chickenDeadCount = 0;
  }

  ngOnInit() {
    this.getChickens();
  }

  reload() {
    this.chickens = [];
    this.errorMessage = '';
    this.loading = true;
    this.getChickens();
  }

  getChickens() {
    this.chickenService.getChickens().subscribe({
      next: (resp) => {
        this.chickens = resp;
        this.loading = false;
        this.chickenTotalCount = this.chickens.length;
        this.chickenAvailableCount = this.chickens.filter(c => c.state == 'A').length;
        this.chickenDiscardedCount = this.chickens.filter(c => c.state == 'D').length;
        this.chickenSoldCount = this.chickens.filter(c => c.state == 'S').length;
        this.chickenDeadCount = this.chickens.filter(c => c.state == 'E').length;
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.loading = false;
      }
    });
  }

}

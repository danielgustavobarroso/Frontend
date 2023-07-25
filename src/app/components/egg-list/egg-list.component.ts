import { Component } from '@angular/core';
import { EggService } from '../../services/egg/egg.service';
import { Egg } from '../../entities/egg';
import { Router } from '@angular/router';

@Component({
  selector: 'app-egg-list',
  templateUrl: './egg-list.component.html',
  styleUrls: ['./egg-list.component.css']
})
export class EggListComponent {
  eggs:Egg[];
  errorMessage:string;
  loading:boolean;
  eggTotalCount: number;
  eggAvailableCount: number;
  eggDiscardedCount: number;
  eggSoldCount: number;
  eggToChickenCount: number;
  states = new Map<String, String>([
    ['A','Disponible'],
    ['D','Descartado'],
    ['S','Vendido'],
    ['C','Convertido en gallina']
  ]);
  origins = new Map<String, String>([
    ['B','Compra'],
    ['D','Puesto por gallina'],
    ['L','Carga inicial']
  ]);

  constructor(private eggService: EggService, private router:Router) {
    this.eggs = [];
    this.errorMessage = '';
    this.loading = true;
    this.eggTotalCount = 0;
    this.eggAvailableCount = 0;
    this.eggDiscardedCount = 0;
    this.eggSoldCount = 0;
    this.eggToChickenCount = 0;
  }

  ngOnInit() {
    this.getEggs();
  }

  reload() {
    this.eggs = [];
    this.errorMessage = '';
    this.loading = true;
    this.getEggs();
  }

  getEggs() {
    this.eggService.getEggs().subscribe({
      next: (resp) => {
        this.eggs = resp;
        this.loading = false;
        this.eggTotalCount = this.eggs.length;
        this.eggAvailableCount = this.eggs.filter(e => e.state == 'A').length;
        this.eggDiscardedCount = this.eggs.filter(e => e.state == 'D').length;
        this.eggSoldCount = this.eggs.filter(e => e.state == 'S').length;
        this.eggToChickenCount = this.eggs.filter(e => e.state == 'C').length;
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.loading = false;
      }
    });
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChickenListComponent } from './components/chicken-list/chicken-list.component';
import { EggListComponent } from './components/egg-list/egg-list.component';
import { CurrentStatusReportComponent } from './components/current-status-report/current-status-report.component';

import { PurchaseChickenListComponent } from './components/purchase-chicken-list/purchase-chicken-list.component';
import { PurchaseChickenAddComponent } from './components/purchase-chicken-add/purchase-chicken-add.component';
import { SaleChickenListComponent } from './components/sale-chicken-list/sale-chicken-list.component';
import { SaleChickenAddComponent }  from './components/sale-chicken-add/sale-chicken-add.component';

import { PurchaseEggListComponent } from './components/purchase-egg-list/purchase-egg-list.component';
import { PurchaseEggAddComponent } from './components/purchase-egg-add/purchase-egg-add.component';
import { SaleEggListComponent } from './components/sale-egg-list/sale-egg-list.component';
import { SaleEggAddComponent }  from './components/sale-egg-add/sale-egg-add.component';

import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'chickenList', component: ChickenListComponent},
  {path: 'eggList', component: EggListComponent},
  {path: 'reportCurrentStatus', component: CurrentStatusReportComponent},
  {path: 'saleChickenList', component: SaleChickenListComponent},
  {path: 'saleChickenAdd', component: SaleChickenAddComponent},
  {path: 'purchaseChickenList', component: PurchaseChickenListComponent},
  {path: 'purchaseChickenAdd', component: PurchaseChickenAddComponent},
  {path: 'saleEggList', component: SaleEggListComponent},
  {path: 'saleEggAdd', component: SaleEggAddComponent},
  {path: 'purchaseEggList', component: PurchaseEggListComponent},
  {path: 'purchaseEggAdd', component: PurchaseEggAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

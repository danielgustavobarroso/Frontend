import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EggListComponent } from './components/egg-list/egg-list.component';
import { ChickenListComponent } from './components/chicken-list/chicken-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrentStatusReportComponent } from './components/current-status-report/current-status-report.component';
import { SaleChickenListComponent } from './components/sale-chicken-list/sale-chicken-list.component';
import { SaleChickenAddComponent } from './components/sale-chicken-add/sale-chicken-add.component';
import { PurchaseChickenListComponent } from './components/purchase-chicken-list/purchase-chicken-list.component';
import { PurchaseChickenAddComponent } from './components/purchase-chicken-add/purchase-chicken-add.component';
import { SaleEggListComponent } from './components/sale-egg-list/sale-egg-list.component';
import { SaleEggAddComponent } from './components/sale-egg-add/sale-egg-add.component';
import { PurchaseEggListComponent } from './components/purchase-egg-list/purchase-egg-list.component';
import { PurchaseEggAddComponent } from './components/purchase-egg-add/purchase-egg-add.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    EggListComponent,
    ChickenListComponent,
    CurrentStatusReportComponent,
    SaleChickenListComponent,
    SaleChickenAddComponent,
    PurchaseChickenListComponent,
    PurchaseChickenAddComponent,

    SaleEggListComponent,
    SaleEggAddComponent,
    PurchaseEggListComponent,
    PurchaseEggAddComponent,

    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

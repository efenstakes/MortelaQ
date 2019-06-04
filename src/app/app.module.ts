import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { NgxElectronModule } from 'ngx-electron'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserModule } from './layouts/user/user.module'
import { ProductModule } from './layouts/product/product.module'
import { OrderModule } from './layouts/order/order.module'
import { InventoryModule } from './layouts/inventory/inventory.module'
import { ExpenseModule } from './layouts/expense/expense.module'
import { PenaltyModule } from './layouts/penalty/penalty.module';
import { ViewsModule } from "./layouts/views/views.module";

import { AboutComponent } from './layouts/about/about.component'


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxElectronModule,

    // internal modules
    UserModule,
    ProductModule,
    OrderModule,
    InventoryModule, 
    ExpenseModule,
    PenaltyModule,

    // shared views
    ViewsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

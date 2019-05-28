import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserModule } from './layouts/user/user.module'
import { ProductModule } from './layouts/product/product.module'
import { OrderModule } from './layouts/order/order.module'
import { InventoryModule } from './layouts/inventory/inventory.module'
import { ExpenseModule } from './layouts/expense/expense.module'
import { PenaltyModule } from './layouts/penalty/penalty.module';

import { AboutComponent } from './layouts/about/about.component'


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // internal modules
    UserModule,
    ProductModule,
    OrderModule,
    InventoryModule, 
    ExpenseModule,
    PenaltyModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

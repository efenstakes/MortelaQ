import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing module
import { ProductRoutingModule } from './product-routing.module'


import { ViewComponent } from './view/view.component';
import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    ViewComponent, MainComponent, AddComponent
  ],
  imports: [
    CommonModule, ProductRoutingModule
  ]
})
export class ProductModule { }

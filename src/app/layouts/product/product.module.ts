import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// module with views like app footer nav etc
import { ViewsModule } from "../views/views.module";

// routing module
import { ProductRoutingModule } from './product-routing.module'


import { ViewComponent } from './view/view.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
                  ViewComponent, MainComponent
  ],
  imports: [
    CommonModule, FormsModule, ProductRoutingModule, ViewsModule
  ]
})
export class ProductModule { }

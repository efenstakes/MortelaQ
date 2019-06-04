import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

// module with views like app footer nav etc
import { ViewsModule } from "../views/views.module";

// routing
import { InventoryRoutingModule } from './inventory-routing.module'

// views
import { ViewComponent } from './view/view.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
                  ViewComponent, MainComponent
                ],
  imports: [
    CommonModule, FormsModule, InventoryRoutingModule, ViewsModule
  ]
})
export class InventoryModule { }

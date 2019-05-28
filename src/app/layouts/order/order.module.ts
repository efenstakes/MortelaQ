import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// import routing module
import { OrderRoutingModule } from './order-routing.module'

// module views
import { ViewComponent } from './view/view.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
                  ViewComponent, MainComponent
                ],
  imports: [
    CommonModule, OrderRoutingModule
  ]
})
export class OrderModule { }

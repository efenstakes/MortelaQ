import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// module with views like app footer nav etc
import { ViewsModule } from "../views/views.module";

// import routing module
import { OrderRoutingModule } from './order-routing.module'

// module views
import { ViewComponent } from './view/view.component';
import { MainComponent } from './main/main.component';
import { ViewForComponent } from './view-for/view-for.component';


@NgModule({
  declarations: [
                  ViewComponent, MainComponent, ViewForComponent
                ],
  imports: [
    CommonModule, OrderRoutingModule, ViewsModule
  ]
})
export class OrderModule { }

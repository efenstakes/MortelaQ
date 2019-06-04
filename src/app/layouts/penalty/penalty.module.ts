import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// module with views like app footer nav etc
import { ViewsModule } from "../views/views.module";

// routing module
import { PenaltyRoutingModule } from './penalty-routing.module'

import { ViewComponent } from './view/view.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
                  ViewComponent, MainComponent
                ],
  imports: [
    CommonModule, FormsModule, PenaltyRoutingModule, ViewsModule
  ]
})
export class PenaltyModule { }

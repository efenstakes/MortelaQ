import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing module
import { PenaltyRoutingModule } from './penalty-routing.module'

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
                 AddComponent, ViewComponent, MainComponent
                ],
  imports: [
    CommonModule, PenaltyRoutingModule
  ]
})
export class PenaltyModule { }

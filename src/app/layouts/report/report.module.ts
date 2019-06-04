import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// routing module
import { ReportRoutingModule } from './report-routing.module'


import { ViewComponent } from './view/view.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
                 ViewComponent, MainComponent
                ],
  imports: [
    CommonModule, ReportRoutingModule
  ]
})
export class ReportModule { }

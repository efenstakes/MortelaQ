import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// rouitng
import { ExpenseRoutingModule } from './expense-routing.module'

// views
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
                  AddComponent, ViewComponent, MainComponent
                ],
  imports: [
    CommonModule, ExpenseRoutingModule
  ]
})
export class ExpenseModule { }

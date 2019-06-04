import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'


// module with views like app footer nav etc
import { ViewsModule } from "../views/views.module";

// routing module
import { UserRoutingModule } from './user-routing.module'


// module views
import { LoginComponent } from './login/login.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
                 LoginComponent, ManageStaffComponent, DashboardComponent, 
                 MainComponent
                ],
  imports: [
    CommonModule, FormsModule, UserRoutingModule, ViewsModule
  ],
  exports: [
    
  ]
})
export class UserModule { }

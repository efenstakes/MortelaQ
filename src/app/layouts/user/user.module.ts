import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// routing module
import { UserRoutingModule } from './user-routing.module'


// module views
import { LoginComponent } from './login/login.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
                 LoginComponent, AddStaffComponent, ManageStaffComponent, DashboardComponent, MainComponent
                ],
  imports: [
    CommonModule, UserRoutingModule
  ]
})
export class UserModule { }

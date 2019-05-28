import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'



// module views
import { LoginComponent } from './login/login.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
       {
           path: 'user', component: MainComponent,

           children: [
                { path: 'login', component: LoginComponent },
                { path: 'add-staff', component: AddStaffComponent },
                { path: 'manage', component: ManageStaffComponent },
                { path: 'dashboard', component: DashboardComponent }
           ]
       }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule {}
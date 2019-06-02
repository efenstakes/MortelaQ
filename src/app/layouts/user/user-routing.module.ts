import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

// authentication guards
import { UserGuard } from "../../guards/user.guard";
import { AdminGuard } from "../../guards/admin.guard";

// module views
import { LoginComponent } from './login/login.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
       {
           path: 'user', component: MainComponent,

           children: [
                { path: 'login', component: LoginComponent },
                { path: 'manage', component: ManageStaffComponent, canActivate: [ AdminGuard ] },
                { path: 'dashboard', component: DashboardComponent, canActivate: [ UserGuard ] }
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
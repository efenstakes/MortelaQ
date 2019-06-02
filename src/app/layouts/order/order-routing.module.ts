import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'


// authentication guards
import { UserGuard } from "../../guards/user.guard";
import { AdminGuard } from "../../guards/admin.guard";


// module views
import { ViewComponent } from './view/view.component';
import { MainComponent } from './main/main.component';
import { ViewForComponent } from './view-for/view-for.component';

const routes: Routes = [
       {
           path: 'order', component: MainComponent,

           children: [
                { path: 'view', component: ViewComponent, canActivate: [ AdminGuard ] },
                { path: 'view-for/:id', component: ViewForComponent }
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
export class OrderRoutingModule {}
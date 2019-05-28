import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'



// module views
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
       {
           path: 'inventory', component: MainComponent,

           children: [
                { path: 'view', component: ViewComponent },
                { path: 'add', component: AddComponent }
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
export class InventoryRoutingModule {}
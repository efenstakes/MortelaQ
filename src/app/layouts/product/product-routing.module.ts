import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'


// module views
import { ViewComponent } from './view/view.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
       {
           path: 'product', component: MainComponent,

           children: [
                { path: 'view', component: ViewComponent }
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
export class ProductRoutingModule {}
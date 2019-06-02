import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// views
import { AboutComponent } from './layouts/about/about.component'

const routes: Routes = [
  { path: '', redirectTo: '/user/login', pathMatch: 'full' }, // 'user/login'
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
                 FooterComponent, TopNavComponent, ProductDetailComponent
                ],
  imports: [
    CommonModule
  ],
  exports: [
            FooterComponent, TopNavComponent, ProductDetailComponent
           ]
})
export class ViewsModule { }

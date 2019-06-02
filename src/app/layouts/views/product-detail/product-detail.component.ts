import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: any = { id: 1, name: 'zege', cost: 45, quantity: 90 }

  constructor() { }

  ngOnInit() {
  }

}

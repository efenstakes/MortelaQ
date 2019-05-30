import { Component, OnInit } from '@angular/core';
import { Router  } from "@angular/router";

import { ProductService } from '../../../services/product.service'
import { OrderService } from '../../../services/order.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: any = {}
  products: any = []

  // model of an order
  order: { id, table_no, is_cleared, is_special, type, cashier_id, items: [] }


  constructor(private router: Router, private productService: ProductService, private orderService: OrderService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'))
  }

   
  get_all_products() {
    console.log(this.productService.all())
    this.products = this.productService.all()
  }

  place_order() {
    console.log( this.orderService.add(this.order) )
    this.products = this.orderService.add(this.order)
  }  

  clear_order() {
    console.log( this.orderService.clear(this.order) )
    this.products = this.orderService.clear(this.order)
  }

  print_order() {

  }

  log_out() {
    localStorage.removeItem('mortela-user')
    this.router.navigate(['/'])
  }




}

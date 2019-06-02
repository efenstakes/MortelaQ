import { Component, OnInit } from '@angular/core';
import { Router  } from "@angular/router";

import { ProductService } from '../../../services/product.service'
import { OrderService } from '../../../services/order.service'
import { PenaltyService } from '../../../services/penalty.service'
import { UserService } from '../../../services/user.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user = { id: 9, name: 'ken', role: 'ADMIN' }
  products: any = { all: [], products: [] }

  search_term: string = ''

  order_x = { id: 99999, table_no: null, is_cleared: null, is_special: false, type: '', cashier_id: null, items: [] }
  // model of an order
  order: any = this.order_x

  show_clear_order_modal: boolean = false
  matched_orders: any = []


  constructor(
              private router: Router, private productService: ProductService, 
              private orderService: OrderService, private penaltyService: PenaltyService,
              private userService: UserService
            ) { }

  ngOnInit() { console.log('uname', this.user.name)
    this.user = this.userService.get_current_user()
    console.log('staf', this.user)
    this.get_all_products()
  }

   
  // get all products there are
  get_all_products() {
    console.log(this.productService.all())
    let all = this.productService.all()
    this.products = { all: all, products: all }
    console.log('this.products', this.products)
  }

  // place a new order
  place_order() {
    console.log( this.orderService.add(this.order) )
    this.products = this.orderService.add(this.order)
  }  

  // clear an order
  clear_order(id) {
    console.log( this.orderService.clear(id) )
    this.products = this.orderService.clear(id)
  }

  // print an order
  print_order() {
    console.log('print order', this.order)
  }


  // show a modal to clear orders
  clear_order_modal() {
    this.show_clear_order_modal = true
  }
  // close the clear order modal
  close_clear_o_modal() {
    this.show_clear_order_modal = false
  }

  // search an order by id
  search_order(event) {
    console.log('get order with id', event.target.value)
  }

  // navigate to a page to show user sales (orders)
  see_my_sales() {
    this.router.navigate([ `/order/view-for/2` ]) // --> replace with this.router.navigate([ `/order/view-for/${this.staff.id}` ])
  }


  // filter the products being seen
  filter_products(event) {
    console.log('filter_products')
    let term = event.target.value
    if( term == 'ALL' ) {
      this.products.products = this.products.all 
      return 
    }

    this.products.products = this.products.all.filter((product)=> {
                                  return product.category == term || product.type == term || product.meal == term
    })

  }



  go_to_expenses() { console.log('go_to_expenses',)
    this.router.navigate([ '/expense/view' ])
  }



}

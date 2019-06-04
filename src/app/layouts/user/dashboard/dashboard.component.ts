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

  order_x = { id: null, table_no: null, is_cleared: false, is_special: 'NO', type: 'IN HOUSE', cashier_id: null, items: [] }
  // model of an order
  order: any = this.order_x
  order_summary: any = { cost: 0, count: 0 }

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
                                  return product.category == term || product.type == term || 
                                  product.meal == term || (product.name.search(term) > -1)
    })

  }

  // add a product to the order
  add_to_order(product) {
    // if its a new order, set defaults before adding items
    if( !this.order.id ) {
      this.order.is_cleared = false 
    }
    // if a product quantity is zero, return
    if( product.quantity < 1 ) return


    let quantity = 1
    let found = this.order.items.find((itm)=> itm.product._id == product._id)
    
    if( found ) {
      quantity += found.quantity
      this.order.items = this.order.items.filter((itm)=> itm.product._id != found.product._id)
    }
    this.order.items.push({ product: product, ...{ quantity: quantity } })
    this.productService.update_quantity({ id: product._id, quantity: (product.quantity-1) })
    console.log('{ id: product._id, quantity: --product.quantity }', { id: product._id, quantity: (product.quantity-1) })
    // console.log('this.order.items', this.order.items)
    this.get_all_products()
    this.set_order_summary()
  }

  /*
      let quantity = 1
    let found = this.order.items.find((itm)=> itm.id == product._id)
    
    if( found ) {
      quantity += found.quantity
      this.order.items = this.order.items.filter((itm)=> itm.id != found.id)
    }
    this.order.items.push({ id: product._id, quantity: quantity })
    */

  set_order_summary() {
    this.order_summary = {
      count: this.order.items.map((itm)=> itm.quantity).reduce((itm_1, itm_2)=> itm_1 + itm_2, 0),
      cost:  this.order.items.map((itm)=> itm.quantity*itm.product.cost).reduce((itm_1, itm_2)=> itm_1 + itm_2, 0)
    }
    // console.log('this.order_summary', this.order_summary)
  }


  go_to_expenses() { console.log('go_to_expenses',)
    this.router.navigate([ '/expense/view' ])
  }



}

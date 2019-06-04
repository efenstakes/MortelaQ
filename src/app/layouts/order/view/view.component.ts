import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

// app services
import { UserService } from '../../../services/user.service'
import { OrderService } from '../../../services/order.service'
import { ProductService } from '../../../services/product.service'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  staff : any = { id: null }

  orders: { all: [], orders: [] }

  constructor(
              private router: Router, private activatedRoute: ActivatedRoute, 
              private location: Location, private userService: UserService, 
              private orderService: OrderService, private productService: ProductService
            ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=> {
      console.log('params', params)
      this.staff.id == params['id']
      this.get_staff_orders()
    })
  }

  
  // log the user out
  log_out() {
    console.log('log_out')
    localStorage.removeItem('mortela-user')
    this.router.navigate(['/'])
  }

  // filter the orders someone is seeing
  filter_orders(event) {
    console.log('filter for', event.target.value)
  }

  // get all orders for this staff
  get_staff_orders() {
    console.log(this.orderService.all())
    this.orderService.all()
  }

  // redirect to the previous page
  go_back() {
    this.location.back()
  }


}

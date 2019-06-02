import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

// app services
import { UserService } from '../../../services/user.service'
import { OrderService } from '../../../services/order.service'
import { ProductService } from '../../../services/product.service'

@Component({
  selector: 'app-view-for',
  templateUrl: './view-for.component.html',
  styleUrls: ['./view-for.component.scss']
})
export class ViewForComponent implements OnInit {
  staff : any = { id: null }

  orders: { original: [], orders: [] }

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService, private orderService: OrderService, private productService: ProductService) { }

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
    console.log(this.orderService.all_for_staff({ id: this.staff['id'] }))
    this.orderService.all_for_staff({ id: this.staff['id'] })
  }


}

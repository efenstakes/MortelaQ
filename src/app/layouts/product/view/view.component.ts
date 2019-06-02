import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

// inlude services
import { UserService } from "../../../services/user.service";
import { ProductService } from "../../../services/product.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  user: any = { id: null }

  products: any = { all: [], products: [] }
  summary: any = { cost: 0, count: 0 }

  all_staff: any = []

  show_add_modal: boolean = false
  show_edit_modal: boolean = false

  show_msg: string = ''

  edit_product = { 
                   name: '', cost: 0, quantity: 0, meal: 'ALL', 
                   category: 'FOODS', type: 'FOOD' 
                  } 


  constructor(
              private router: Router, private userService: UserService, 
              private productService: ProductService
            ) { }

  ngOnInit() {
    this.user = this.userService.get_current_user()
    this.get_all()
    this.get_all_staff()
  }



  // filter the inventory someone is seeing
  filter(event) {
    console.log('filter by', event.target.value)
    let term = event.target.value


    switch ( term ) {
      case 'TODAY':
        
        break;
      case 'THIS WEEK':
        
        break;
      case 'THIS MONTH':
        
        break;
      case 'ALL':

          this.products.products = this.products.all 
          this.set_summary(this.products.products)

          break;
      
      default:

        // the term is a username, get the user's penalties
        let user = this.all_staff.find((staf)=> staf.name == term)

        // get products
        let products = this.products.all.filter((pen)=> pen.staff_id == user._id)
        this.products.products = products 
        this.set_summary(products)

        break;
    }

  }

  
  get_all_staff() {
    this.all_staff = this.userService.get_all_staff()
  }

  // get all  
  get_all() {
    let all = this.productService.all()
    this.products = { all: all, products: all }
    this.set_summary(all)
  }


  // delete an inventory
  delete(id) {
    let retun = this.productService.delete(id) 
    console.log('ret', retun)
    this.get_all()
  }


  // show the modal to add 
  add_modal() {
    this.show_add_modal = true 
  }
  close_add_modal() {
    this.show_add_modal = false 
  }

  // add product
  add() {
    this.show_msg = ''
   
    console.log(this.edit_product)

    let response = this.productService.add(this.edit_product)
    console.log('response', response)
    if( response.saved ) {
      this.show_msg = 'SUCCESS'
    } else {
      this.show_msg = 'ERROR'
    }

    this.get_all()
  }


  
  // show the modal to edit 
  edit_modal(product) {
    this.edit_product = product
    this.show_edit_modal = true 
  }
  close_edit_modal() { console.log('close modal')
    this.show_edit_modal = false 
  }

  // edit product
  edit() {
    this.show_msg = ''
   
    console.log(this.edit_product)

    let response = this.productService.update(this.edit_product)
    console.log('response', response)
    if( response.updated ) {
      this.show_msg = 'SUCCESS'
    } else {
      this.show_msg = 'ERROR'
    }

    this.get_all()
  }




  // calculate the summary of products passed
  set_summary(products) {
    this.summary = {
      cost: products.map((prod)=> parseFloat(prod.cost)*parseFloat(prod.quantity)).reduce((prd_1, prd_2)=> prd_1 + prd_2, 0),
      count: products.length
    }
  }


}

import { Component, OnInit } from '@angular/core'

// app services
import { UserService } from '../../../services/user.service'
import { ExpenseService } from '../../../services/expense.service'


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  user: any = { id: null }

  expenses: any = { all: [], expenses: [] }
  summary: any = { cost: 0, count: 0 }

  show_add_modal: boolean = false
  edit_expense = {  
                  name: '', cost: 0, quantity: 0, category: '', type: ''
                 } 
  show_msg: string = ''


  constructor( 
              private userService: UserService, private expenseService: ExpenseService
            ) { }

  ngOnInit() {
    this.user = this.userService.get_current_user()
    this.get_all()
  }



  // filter the inventory someone is seeing
  filter(event) {
    console.log('filter by', event.target.value)
  }

  // get all  
  get_all() {
    let all = this.expenseService.all()
    this.expenses = { all: all, expenses: all }
    this.summary = {
      cost: all.map((inv)=> parseFloat(inv.cost)).reduce((inv_1, inv_2)=> inv_1 + inv_2, 0),
      count: all.length
    }
  }


  // delete an inventory
  delete(id) {
    let retun = this.expenseService.delete(id) 
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


  // add expense
  add() {
    this.show_msg = ''

    let response = this.expenseService.add(this.edit_expense)
    console.log('response', response)
    if( response.saved ) {
      this.show_msg = 'SUCCESS'
    } else {
      this.show_msg = 'ERROR'
    }

    this.get_all()
  }



}

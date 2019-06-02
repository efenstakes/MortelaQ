import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

// app services
import { UserService } from '../../../services/user.service'
import { PenaltyService } from '../../../services/penalty.service'
import { ProductService } from '../../../services/product.service'


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  user: any = { id: null }

  penalties: any = { all: [], penalties: [] }
  summary: any = { cost: 0, count: 0 }

  all_staff: any = []

  show_add_modal: boolean = false
  edit_penalty = { item: '', cost: 0, description: '', staff: '' } 
  show_msg: string = ''


  constructor(
              private router: Router, private activatedRoute: ActivatedRoute, 
              private location: Location, private userService: UserService, 
              private penaltyService: PenaltyService, private productService: ProductService
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

          this.penalties.penalties = this.penalties.all 
          this.set_summary(this.penalties.penalties)

          break;
      
      default:

        // the term is a username, get the user's penalties
        let user = this.all_staff.find((staf)=> staf.name == term)

        // get penalties
        let penalties = this.penalties.all.filter((pen)=> pen.staff_id == user._id)
        this.penalties.penalties = penalties 
        this.set_summary(penalties)

        break;
    }

  }

  
  get_all_staff() {
    this.all_staff = this.userService.get_all_staff()
  }

  // get all  
  get_all() {
    let all = this.penaltyService.all()
    this.penalties = { all: all, penalties: all }
    this.set_summary(all)
  }


  // delete an inventory
  delete(id) {
    let retun = this.penaltyService.delete(id) 
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
   
    console.log(this.edit_penalty)

    let staff = this.all_staff.filter((stf)=> stf.name == this.edit_penalty.staff)

    this.edit_penalty.staff = staff[0]

    let response = this.penaltyService.add(this.edit_penalty)
    console.log('response', response)
    if( response.saved ) {
      this.show_msg = 'SUCCESS'
    } else {
      this.show_msg = 'ERROR'
    }

    this.get_all()
  }


  // calculate the summary of penalties passed
  set_summary(penalties) {
    this.summary = {
      cost: penalties.map((pen)=> parseFloat(pen.cost)).reduce((pen_1, pen_2)=> pen_1 + pen_2, 0),
      count: penalties.length
    }
  }



}

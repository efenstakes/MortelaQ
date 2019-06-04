import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

// inlude services
import { UserService } from "../../../services/user.service";

@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.scss']
})
export class ManageStaffComponent implements OnInit {
  user: any = {}
  staff: any = { all: [], staff: [] }

  staff_in_edit: any = {}
  show_staff_edit_modal: boolean = false
  show_staff_add_modal: boolean = false
  add_success_msg: string = ''

  staff_add_success = false
  staff_add_error = false

  filter_term: string = ''

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.get_all_staff()
    this.user = this.userService.get_current_user()
  }

  // get all staff from electron
  get_all_staff() {
    let all_users = this.userService.get_all_staff()
    this.staff = { all: all_users, staff: all_users }
    console.log('staff', this.staff)
  }

  // filter staff by role
  filter(event) {
    let term = event.target.value
    console.log('term', term)
    
    if( term == 'ALL' ) {
      this.staff.staff = this.staff.all
      return
    } 
    if( term == 'ADMINISTRATOR' ) term = 'ADMIN'
    let matches = this.staff.all.filter((staff)=> staff.role == term)
    this.staff.staff = matches
  }

  // show a modal where the staff data can be edited
  show_edit_modal(staff) {
    console.log('edit', staff)
    this.staff_in_edit = staff 
    this.show_staff_edit_modal = true
  }
  // close edit modal
  close_edit_modal() {
    this.show_staff_edit_modal = false
  }

  // show a modal where the staff can be added
  show_add_modal() {
    this.staff_in_edit = { name: '', role: 'CASHIER', salary: 0, password: '' } 
    this.show_staff_add_modal = true
  }
  // close add modal
  close_add_modal() {
    this.show_staff_add_modal = false
  }

  // save the updated staff data
  edit_staff() {
    console.log(this.userService.update_staff(this.staff_in_edit))
    // let result = this.userService.update_staff(this.staff_in_edit)
    // console.log('res', result)
    this.show_staff_edit_modal = false
    this.get_all_staff()
  }

  // delete a staff 
  delete_staff(id) {
    console.log('delete id', id) 
    
    let result = this.userService.delete_staff(id)
    console.log('res', result)
    this.get_all_staff()
  }

  // add a staffer
  add_staff() {
    this.staff_add_success = false
    this.staff_add_error = false
    
    let result = this.userService.add_staff(this.staff_in_edit)
    console.log('res', result)

    if ( result.saved ) {
      this.staff_add_success = true
    } else {
      this.staff_add_error = true
    }

    this.get_all_staff()
  }


}

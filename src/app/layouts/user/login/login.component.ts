import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name: string = ''
  password: string = ''

  error_msg: string = ''
  is_loading: boolean = false


  constructor(private userService: UserService) { }

  ngOnInit() {
  }


  // log a user in   **Check Your Credentials And Try Again**
  log_in() {
    this.is_loading = true
    this.error_msg = ''
    console.log('log in ', this.name , ' ', this.password)
    this.is_loading = false
  }



}

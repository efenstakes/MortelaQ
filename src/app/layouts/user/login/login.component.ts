import { Component, OnInit } from '@angular/core';
import { Router  } from "@angular/router";

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


  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }


  // log a user in   **Check Your Credentials And Try Again**
  log_in() {
    let response
    this.is_loading = true
    this.error_msg = ''
    
    response = this.userService.log_in({ name: this.name, password: this.password })
    
    if ( !response ) {
      this.error_msg = 'Check Your Credentials And Try Again'
    } else {

      console.log('user', response)
      localStorage.setItem('mortela-user', JSON.stringify(response))
      setTimeout(()=> this.router.navigate(['/user/dashboard']), 700)
      
    }
    setTimeout(()=> this.is_loading = false, 1000)
  }

  t() {
    
  }

}

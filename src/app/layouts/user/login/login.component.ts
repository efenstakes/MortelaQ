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

  constructor(private userService: UserService) { }

  ngOnInit() {
  }


  // log a user in
  log_in() {

  }


}

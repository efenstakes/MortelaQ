import { Component, OnInit } from '@angular/core';
import { Router  } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: any = {}
  products: any = []

  constructor(private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'))
  }

   
  get_all_products() {

  }

  place_order() {

  }  

  clear_order() {

  }

  print_order() {

  }

  log_out() {
    localStorage.removeItem('mortela-user')
    this.router.navigate(['/'])
  }




}

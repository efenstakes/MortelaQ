import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  @Input() user: any = {}

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private location: Location) { }

  ngOnInit() {
  }

  
  // log the user out
  log_out() {
    console.log('log_out')
    localStorage.removeItem('mortela-user')
    this.router.navigate(['/'])
  }

  // redirect to the previous page
  go_back() {
    this.location.back()
  }

}

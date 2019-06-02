import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from "../services/user.service";

@Injectable({
  providedIn: 'root'
})
export class CashierGuard implements  CanActivate{
  
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    let current_user = this.userService.get_current_user()
    if ( current_user && current_user['role'] == 'CASHIER' ) { return true; }

    // Navigate to the login page with extras
    this.router.navigate(['/user/login']);
    return false;
  }


}

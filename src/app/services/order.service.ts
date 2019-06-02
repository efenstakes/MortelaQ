import { Injectable } from '@angular/core';

import { ElectronService } from 'ngx-electron'

import { UserService } from "./user.service";


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private electronService: ElectronService, private userService: UserService) { }

  
  // add
  add(order) {
    return this.electronService.ipcRenderer.sendSync('add-order', { order, cashier: this.userService.get_current_user() })
  }

  clear(order) {
    return this.electronService.ipcRenderer.sendSync('clear-order', { order, cashier: this.userService.get_current_user() })
  }


  // delete
  delete(id) {
    return this.electronService.ipcRenderer.sendSync('delete-order', { id, manager: this.userService.get_current_user() })
  }


  // all
  all() {
    return this.electronService.ipcRenderer.sendSync('all-orders', {  })
  }


  // for a day
  all_for_day(day) {
    return this.electronService.ipcRenderer.sendSync('all-orders-for-day', day)
  }

  // get all the orders of a staffer
  all_for_staff(params) {
    return this.electronService.ipcRenderer.sendSync('all-orders-for-staffer', params)
  }

  

}

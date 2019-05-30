import { Injectable } from '@angular/core';

import { ElectronService } from 'ngx-electron'


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private electronService: ElectronService) { }

  
  // add
  add(order) {
    return this.electronService.ipcRenderer.sendSync('add-order', order)
  }

  clear(order) {
    return this.electronService.ipcRenderer.sendSync('clear-order', order)
  }


  // delete
  delete(order) {
    return this.electronService.ipcRenderer.sendSync('delete-order', order)
  }


  // all
  all() {
    return this.electronService.ipcRenderer.sendSync('all-orders', {  })
  }


  // for a day
  all_for_day(day) {
    return this.electronService.ipcRenderer.sendSync('all-orders-for-day', day)
  }

  

}

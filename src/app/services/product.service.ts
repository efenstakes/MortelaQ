import { Injectable } from '@angular/core';

import { ElectronService } from 'ngx-electron'

import { UserService } from "./user.service";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private electronService: ElectronService, private userService: UserService) { }

  
  // add
  add(product) {
    return this.electronService.ipcRenderer.sendSync('add-product', { product, manager: this.userService.get_current_user()  })
  }
  
  // update
  update(product) {
    return this.electronService.ipcRenderer.sendSync('edit-product', { product, manager: this.userService.get_current_user()  })
  }

  // update
  update_quantity(product) { console.log('update prod', product)
    return this.electronService.ipcRenderer.sendSync('edit-product-quantity', { product, manager: this.userService.get_current_user()  })
  }

  // delete
  delete(id) {
    return this.electronService.ipcRenderer.sendSync('delete-product', { id, manager: this.userService.get_current_user() })
  }


  // all
  all() {
    return this.electronService.ipcRenderer.sendSync('all-products', {  })
  }


  // for a day
  all_for_day(day) {
    return this.electronService.ipcRenderer.sendSync('all-products-for-day', { day })
  }




}

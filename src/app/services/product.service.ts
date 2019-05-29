import { Injectable } from '@angular/core';

import { ElectronService } from 'ngx-electron'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private electronService: ElectronService) { }

  
  // add
  add(product) {
    return this.electronService.ipcRenderer.sendSync('add-product', { product })
  }


  // delete
  delete(product) {
    return this.electronService.ipcRenderer.sendSync('delete-product', { product })
  }


  // all
  all() {
    return this.electronService.ipcRenderer.sendSync('all-product', {  })
  }


  // for a day
  all_for_day(day) {
    return this.electronService.ipcRenderer.sendSync('all-products-for-day', { day })
  }




}

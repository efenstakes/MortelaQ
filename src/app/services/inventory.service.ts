import { Injectable } from '@angular/core';

import { ElectronService } from 'ngx-electron'


@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private electronService: ElectronService) { }

  
  // add
  add(inventory) {
    return this.electronService.ipcRenderer.sendSync('add-product', { inventory })
  }


  // delete
  delete(inventory) {
    return this.electronService.ipcRenderer.sendSync('delete-inventory', { inventory })
  }


  // all
  all() {
    return this.electronService.ipcRenderer.sendSync('all-inventory', {  })
  }


  // for a day
  all_for_day(day) {
    return this.electronService.ipcRenderer.sendSync('all-inventory-for-day', { day })
  }



}

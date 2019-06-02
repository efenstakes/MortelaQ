import { Injectable } from '@angular/core';

import { ElectronService } from 'ngx-electron'
import { UserService } from "./user.service";


@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private electronService: ElectronService, private userService: UserService) { }

  
  // add
  add(inventory) {
    return this.electronService.ipcRenderer.sendSync('add-inventory', { inventory, manager: this.userService.get_current_user() })
  }


  // delete
  delete(id) {
    return this.electronService.ipcRenderer.sendSync('delete-inventory', { id, manager: this.userService.get_current_user() })
  }


  // all
  all() {
    return this.electronService.ipcRenderer.sendSync('all-inventory', { manager: this.userService.get_current_user() })
  }


  // for a day
  all_for_day(day) {
    return this.electronService.ipcRenderer.sendSync('all-inventory-for-day', { day, manager: this.userService.get_current_user() })
  }



}

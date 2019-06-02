import { Injectable } from '@angular/core';

import { ElectronService } from 'ngx-electron'

import { UserService } from "./user.service";


@Injectable({
  providedIn: 'root'
})
export class PenaltyService {

  constructor(private electronService: ElectronService, private userService: UserService) { }

  
  // add
  add(penalty) {
    return this.electronService.ipcRenderer.sendSync('add-penalty',  { penalty, manager: this.userService.get_current_user() })
  }


  // delete
  delete(id) {
    return this.electronService.ipcRenderer.sendSync('delete-penalty', { id, manager: this.userService.get_current_user() })
  }


  // all
  all() {
    return this.electronService.ipcRenderer.sendSync('all-penalty', {  })
  }


  // for a day
  all_for_day(day) {
    return this.electronService.ipcRenderer.sendSync('all-penalty-for-day', day)
  }


}

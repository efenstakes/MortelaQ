import { Injectable } from '@angular/core';

import { ElectronService } from 'ngx-electron'

import { UserFixService } from "./user-fix.service";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  
  constructor(private electronService: ElectronService, private userService: UserFixService) {  }

  
  // add
  add(expense) {
    return this.electronService.ipcRenderer.sendSync('add-expense', { expense, manager: this.userService.get_current_user() })
  }


  // delete
  delete(id) {
    return this.electronService.ipcRenderer.sendSync('delete-expense', { id, manager: this.userService.get_current_user() })
  }


  // all
  all() {
    return this.electronService.ipcRenderer.sendSync('all-expenses', {  })
  }


  // for a day
  all_for_day(day) {
    return this.electronService.ipcRenderer.sendSync('all-expenses-for-day', { day })
  }



}

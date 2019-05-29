import { Injectable } from '@angular/core';

import { ElectronService } from 'ngx-electron'


@Injectable({
  providedIn: 'root'
})
export class ExpenseService {


  constructor(private electronService: ElectronService) { }

  
  // add
  add(inventory) {
    return this.electronService.ipcRenderer.sendSync('add-expense', { inventory })
  }


  // delete
  delete(inventory) {
    return this.electronService.ipcRenderer.sendSync('delete-expense', { inventory })
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

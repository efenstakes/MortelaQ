import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private electronService: ElectronService) { }
  

  // log a user n
  log_in(user) {
    return this.electronService.ipcRenderer.sendSync('log-in', user)
  }

  // log a user out
  log_out(user) {
    return this.electronService.ipcRenderer.sendSync('log-out', user)
  }

  // add a new user
  add_staff(user) {
    return this.electronService.ipcRenderer.sendSync('add-staff', user)
  }

  // delete staff
  delete_staff(user) {
    return this.electronService.ipcRenderer.sendSync('delete-staff', user)
  }

  // update staff
  update_staff(user) {
    return this.electronService.ipcRenderer.sendSync('update-staff', user)
  }
  // edit user details
  update_user(user) {
    return this.electronService.ipcRenderer.sendSync('update-user', user)
  }

  // edit user password
  update_password(user, new_password) {
    return this.electronService.ipcRenderer.sendSync('update-user-password', { user, new_password })
  }



}

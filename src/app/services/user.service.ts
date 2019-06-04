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
    return this.electronService.ipcRenderer.sendSync('add-staff', { user, manager: this.get_current_user() })
  }

  // delete staff
  delete_staff(id) {
    return this.electronService.ipcRenderer.sendSync('delete-staff', { id, manager: this.get_current_user()})
  }

  // update staff
  update_staff(user) {
    return this.electronService.ipcRenderer.sendSync('update-staff', { user, manager: this.get_current_user() })
  }
  
  // get all staff
  get_all_staff() {
    return this.electronService.ipcRenderer.sendSync('get-all-staff', {})
  }

  // edit user details
  update_user(user) {
    return this.electronService.ipcRenderer.sendSync('update-user', user)
  }

  // edit user password
  update_password(user, new_password) {
    return this.electronService.ipcRenderer.sendSync('update-user-password', { user, new_password })
  }

  

  // get the current user
  get_current_user(){
    return JSON.parse(localStorage.getItem('mortela-user')) ? 
               JSON.parse(localStorage.getItem('mortela-user')) : 
               { id: '', name: '', role: '' }
  }



}

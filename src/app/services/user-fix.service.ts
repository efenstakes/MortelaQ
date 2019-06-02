import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserFixService {

  constructor() { }

    

  // get the current user
  get_current_user(){
    return JSON.parse(localStorage.getItem('mortela-user')) ? 
               JSON.parse(localStorage.getItem('mortela-user')) : 
               { id: '', name: '', role: '' }
  }


}

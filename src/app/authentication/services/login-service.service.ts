import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }
  isUserloggedin(){
    if(sessionStorage.getItem('email')?.length != null && sessionStorage.getItem('password') != null){
    return true;
    }
    else{
      return false;
    }
    
  }
  
  
  
}

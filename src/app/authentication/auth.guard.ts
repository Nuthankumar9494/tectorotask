import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from './services/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private login:LoginServiceService,private route:Router){}
  canActivate() {
    if(this.login.isUserloggedin()){
      return true;
    }
    else{
      return   this.route.navigateByUrl('/');
    }
   
  }

  }

 
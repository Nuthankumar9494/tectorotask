import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginServiceService } from './services/login-service.service';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ErrorpageComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule, 
    ReactiveFormsModule
  ],
  providers:[LoginServiceService]
  
})
export class AuthenticationModule { }

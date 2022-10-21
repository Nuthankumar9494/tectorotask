import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  value: any;
  userdata: any;
  loginform: any;
  error: boolean = false;
  emailData: any;
  passwordData: any;
  datanotfounderror: boolean = false;
  formfillup: boolean = false;
  constructor(private navigate: Router) { }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$")]),

    })
    this.value = (localStorage.getItem(('signupData')));
  }


  Onlogin() {
    if(this.loginform.value.email == null && this.loginform.value.password == null){
      this.formfillup=true;
    }
    else{
    let userdata = JSON.parse(this.value);
    if (userdata != null) {
      userdata?.forEach((data: any) => {
        for (let key in data) {
          if (this.loginform.value.email === data.email && this.loginform.value.password === data.password) {
            this.navigate.navigateByUrl('/employee/home');
            sessionStorage.setItem('username', data.username);
            sessionStorage.setItem('email', data.email);
            sessionStorage.setItem('role', data.Designation);
            sessionStorage.setItem('password', data.password);
          }
          else {
            this.error = true;
          }
        }
      });
    }
    else {
      this.datanotfounderror = true;
    }
  }
}
  emailErrors() {
    const email = this.loginform.get('email');
    if (email.touched && !email.valid) {
      if (email.errors.required) {
        return 'email required'
      }
      if (email.errors.minlength) {
        return 'email  required minimum length 7'
      }
      if (email.errors.pattern) {
        return 'email must follow this pattern john.cris123@gmail.com'

      }

    }
    return;
  }
  passwordErrors() {
    const password = this.loginform.get('password');
    if (password.touched && !password.valid) {
      if (password.errors.required) {
        return 'password required'
      }
      if (password.errors.minlength) {
        return 'email  required minimum length 10'
      }
      // if(password.errors.pattern){
      //   return 'password must have one uppercase and number aand special character'
      //   }
    }
    return;
  }

}

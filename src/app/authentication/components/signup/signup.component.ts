import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { localstate } from 'src/app/employee/components/local.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loginform :any;
   value:boolean=true;
 
  constructor(private router:Router) { 

  
  }

  ngOnInit(): void {
    this.loginform= new FormGroup({
      username:new FormControl(null,[Validators.required,Validators.minLength(6)]),
     email: new FormControl(null,[Validators.required,Validators.minLength(10),Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
      password: new FormControl(null,[Validators.required,Validators.minLength(10),Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$")]),
      Designation:new FormControl(null,[Validators.required])
    })
    console.log(this.loginform.value);
    
  }
  addsignup(){
  let json = this.loginform.value;
const isData = localStorage.getItem("signupData");
if(isData == null){
const newArr =[];
newArr.push(json);
localStorage.setItem("signupData",JSON.stringify(newArr));
} else{
  const olddata = JSON.parse(isData);
  olddata.push(json);
  localStorage.setItem("signupData",JSON.stringify(olddata))
}
    this.router.navigateByUrl('/');  
  }
  emailErrors(){
    const email = this.loginform.get('email');
    if(email.touched && !email.valid){
      if(email.errors.required){
        return 'email required'
      }
      if(email.errors.minlength){
      return 'email  required minimum length 7'
      }
      if(email.errors.pattern){
        return 'email must follow this pattern john.cris123@gmail.com'
       
        }
     
    }
    return;
  }
  passwordErrors(){
    const password = this.loginform.get('password');
    if(password.touched && !password.valid){
      if(password.errors.required){
        return 'password required'
      }
      if(password.errors.minlength){
        return 'email  required minimum length 10'
        }
        // if(password.errors.pattern){
        //   return 'password must have one uppercase and number aand special character'
        //   }
  }
  return;
  }
  NameErrors(){
    const username = this.loginform.get('username');
    if(username.touched && !username.valid){
      if(username.errors.required){
        return 'username required'
      }
      if(username.errors.minlength){
        return 'username  required minimum length 8'
        }
      }
      return;
  }
}

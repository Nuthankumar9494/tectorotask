import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { Injectable } from '@angular/core';
import { employeedata } from '../components/employe.model';

@Injectable({
  providedIn: 'root'
})
export class DataService{
    user :employeedata[]=[{id:1,Name:'Nuthan',Designation:'Frontend', MobileNumber:96824224122,email:"gatadi.nuthankumar@gmail.com",Location:"Hyderabad",fewlines:"i have worked on different projects "
      
  },{id:2,Name:'kushal',Designation:'Frontend', MobileNumber:96824224122,email:"vangala.kushalvangala@gmail.com",Location:"pune",fewlines:"i have worked on different projects "
      
}]

  constructor() { }
  addemployee(user:employeedata){
     const itemIndex =this.user.length;
     user.id =this.getnextid();
     console.log(user);
     this.user[itemIndex] =user;
     
  }
  delete(data :employeedata){
   
   this.user.splice(this.user.indexOf(data),1);
   
    
  }
  update(user:employeedata){
  const itemIndex = this.user.findIndex(item=> item.id === user.id);
  console.log(itemIndex);
  this.user[itemIndex]=user;
  
  }
  getnextid(){
 let highest=0;
 this.user.forEach(elements=>{
  if(highest ===0){
    highest = elements.id;
  }
  if(highest < elements.id){
    highest = elements.id;
  }
 });
 return highest +1;
  }
  getemployeebyId(id:number){
   const itemIndex = this.user.findIndex(item =>item.id === id);
   return this.user[itemIndex];
  }
}

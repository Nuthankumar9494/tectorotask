import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  userdata:any;
  emaildata:any;
  roledata:any;
  constructor(private auth: Router) { }

  ngOnInit(): void {
    this.userdata=sessionStorage.getItem('username');
  this.emaildata=sessionStorage.getItem('email');
  this.roledata=sessionStorage.getItem('role');
  }
  
  
}

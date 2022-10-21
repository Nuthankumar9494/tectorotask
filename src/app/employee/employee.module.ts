import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { DisplayPageComponent } from './components/display-page/display-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserpageComponent } from './components/userpage/userpage.component';
import { ServicesComponent } from './components/services/services.component';



@NgModule({
  declarations: [
    DisplayPageComponent,
    UserpageComponent,
    ServicesComponent,
   
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
  ]
})
export class EmployeeModule { }

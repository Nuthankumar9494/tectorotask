import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisplayPageComponent } from './components/display-page/display-page.component';
import { ServicesComponent } from './components/services/services.component';
import { UserpageComponent } from './components/userpage/userpage.component';

const routes: Routes = [{path:'home',component:DisplayPageComponent},{path:'userpage',component:UserpageComponent},{path:'service',component:ServicesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

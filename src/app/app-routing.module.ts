import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
},{path:'employee',loadChildren: ()=>import('./employee/employee.module').then(m=>m.EmployeeModule),canActivate:[AuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

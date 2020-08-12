import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoansComponent } from './loans/loans.component';
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: '', redirectTo: '/loans', pathMatch: 'full' },
  {
    path: 'loans',
    component: LoansComponent
  },
  { 
    path: 'login',
    component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

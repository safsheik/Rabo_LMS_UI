import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoansComponent } from './loans/loans.component';
import { LoginComponent } from "./login/login.component";
import { LoanDetailsComponent } from './loans/loan-details/loan-details.component';
import { LoanModifyComponent } from './loans/loan-modify/loan-modify.component';
import { LoanStartComponent } from './loans/loan-start/loan-start.component';

const routes: Routes = [
  { path: '', redirectTo: '/loans', pathMatch: 'full' },
  {
    path: 'loans',
    component: LoansComponent,
    children : [
      { path: '', component: LoanStartComponent},
      { path: ':id', component: LoanDetailsComponent},
      { path: 'new', component: LoanModifyComponent},
      { path: ':id/modify', component: LoanModifyComponent }
    ]
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

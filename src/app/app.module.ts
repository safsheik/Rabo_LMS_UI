import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LoansComponent } from './loans/loans.component';
import { LoanListComponent } from './loans/loan-list/loan-list.component';
import { LoanModifyComponent } from './loans/loan-modify/loan-modify.component';
import { LoanStartComponent } from './loans/loan-start/loan-start.component';
import { LoanDetailsComponent } from './loans/loan-details/loan-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LoansComponent,
    LoanListComponent,
    LoanModifyComponent,
    LoanStartComponent,
    LoanDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

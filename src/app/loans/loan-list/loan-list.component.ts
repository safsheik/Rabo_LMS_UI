import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Loan } from '../loan.model';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {
  loans: Loan[];
  subscription: Subscription;
  constructor(private loanService: LoanService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.loanService.loansChanged
      .subscribe(
        (loans: Loan[]) => {
          console.log("SAF: Loans Changed susbscription called!");
          console.log(loans);
          this.loans = loans;
        }
      );
    this.loanService.fetchLoans();
  }

  onNewLoan() {

  }

}

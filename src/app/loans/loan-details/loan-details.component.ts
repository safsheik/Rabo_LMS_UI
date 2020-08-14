import { Component, OnInit } from '@angular/core';
import { Loan } from '../loan.model';
import { LoanService } from '../loan.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {

  loan: Loan;
  index: number;

  constructor(private loanService: LoanService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.index = +params['id'];
          this.loan = this.loanService.getLoanByIndex(this.index);
        }
      );
  }

  onModify() {
    this.router.navigate(['modify'], {relativeTo: this.route});
  }

  onDelete() {
    // this.loanService.deleteLoan(this.id);
    // this.router.navigate(['/loans']);
  }



}

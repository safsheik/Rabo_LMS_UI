import { Injectable } from "@angular/core";
import { Loan } from "./loan.model";
import { Subject } from "rxjs";
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

@Injectable()
export class LoanService {
    loansChanged = new Subject<Loan[]>();
    
    private loans: Loan[] = [];
    constructor(private http: HttpClient) {}

    fetchLoans() {
        console.log("SAF: LoanServie - fetchLoans() called");
        this.http.get<Loan[]>('http://localhost:8042/loans').subscribe(loans => {
            console.log(loans);
            this.loans = loans;
            this.loansChanged.next(this.loans.slice());
        });
    //     return this.http
    //   .get<Loan[]>(
    //     'http://localhost:8042/loans'
    //   )
    //   .pipe(
    //     map(loans => {
    //         console.log(loans);
    //       return loans.map(loan => {
    //         return {
    //           ...loan
    //         };
    //       });
    //     }),
    //     tap(loans => {
    //         this.loansChanged.next(this.loans.slice());
    //     })
    //   );
    }

    addLoan(loan: Loan) {
        console.log("SAF: inside loanService: addLoan");
        console.log(loan);
        // this.http
        // .post(
        //     'http://localhost:8042/loans',
        //     loan
        // )
        // .subscribe(response => {
        //     console.log(response);
        //     this.fetchLoans();
        // });
    }

    modifyLoan(index: number, loan: Loan) {
        console.log("SAF: inside loanService: modifyLoan");
        console.log(loan);
        // this.http
        // .put(
        //     'https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json',
        //     loan
        // )
        // .subscribe(response => {
        //     console.log(response);
        //     this.fetchLoans();
        // });
    }

    getLoanByIndex(index: number) {
        return this.loans[index];
      }
}
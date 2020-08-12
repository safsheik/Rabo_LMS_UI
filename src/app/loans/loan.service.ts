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
        return this.http
      .get<Loan[]>(
        'https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json'
      )
      .pipe(
        map(loans => {
          return loans.map(loan => {
            return {
              ...loan
            };
          });
        }),
        tap(loans => {
            this.loansChanged.next(this.loans.slice());
        })
      );
        
    }

    addLoan(loan: Loan) {
        
        this.http
        .post(
            'https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json',
            loan
        )
        .subscribe(response => {
            console.log(response);
            this.fetchLoans();
        });

    }

    modifyLoan(loan: Loan) {
        
        this.http
        .put(
            'https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json',
            loan
        )
        .subscribe(response => {
            console.log(response);
            this.fetchLoans();
        });
    }
}
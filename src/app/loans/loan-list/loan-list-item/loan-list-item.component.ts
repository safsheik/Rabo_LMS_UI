import { Component, OnInit, Input } from '@angular/core';
import { Loan } from '../../loan.model';

@Component({
  selector: 'app-loan-list-item',
  templateUrl: './loan-list-item.component.html',
  styleUrls: ['./loan-list-item.component.css']
})
export class LoanListItemComponent implements OnInit {
  @Input() loan: Loan;
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

}

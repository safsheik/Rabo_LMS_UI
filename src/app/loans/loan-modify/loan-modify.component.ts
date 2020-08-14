import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-loan-modify',
  templateUrl: './loan-modify.component.html',
  styleUrls: ['./loan-modify.component.css']
})
export class LoanModifyComponent implements OnInit {
  index: number;
  modifyMode = false;
  loanForm: FormGroup;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private loanService: LoanService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index = +params['id'];
      this.modifyMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    if (this.modifyMode) {
      this.loanService.modifyLoan(this.index, this.loanForm.value);
    } else {
      this.loanService.addLoan(this.loanForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  initForm() {
    let loanId = 0;
    let loanUser = '';
    let amount = '';
    let address = '';
    let city = '';
    let propertyId = 0;
    if (this.modifyMode) {
      const loan = this.loanService.getLoanByIndex(this.index);
      console.log("SAF: inside Modify initForm");
      console.log(loan);
      loanId = +loan.loanId;
      loanUser = loan.loanUser;
      amount = loan.amount;
      propertyId = +loan.propertyAddress.propertyId;
      address = loan.propertyAddress.address;
      city = loan.propertyAddress.city;
    }
    this.loanForm = new FormGroup({
      loanId: new FormControl(loanId, Validators.required),
      loanUser: new FormControl(loanUser, Validators.required),
      amount: new FormControl(amount, Validators.required),
      propertyId: new FormControl(propertyId, Validators.required),
      address: new FormControl(address, Validators.required),
      city: new FormControl(city, Validators.required)
    });
  }


}

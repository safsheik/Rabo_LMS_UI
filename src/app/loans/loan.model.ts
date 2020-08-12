import { User } from '../common/user.model'
import { PropertyAddress } from '../common/address.model'
import { Address } from 'cluster';
export class Loan {
    public loanId: number;
    public loanUser: string;
    public amount: string;
    // public userDetails: User;
    public propertyAddress: PropertyAddress;

  constructor(loanId: number, loanUser: string, amount: string, propertyAddress: PropertyAddress) {
    this.loanId = loanId;
    this.loanUser = loanUser;
    this.amount = amount;
    // this.userDetails = userDetails;
    this.propertyAddress = propertyAddress;
  }
}